const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const crypto = require('crypto')

//if we want to create routes other than in app.js then we need to use this express router
const authRouter = express.Router();


/**
 * /api/auth/register
 */
authRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({ email });

    if (isUserAlreadyExists) {
        return res.status(409).json({
            message: "User already exists",
        });
    }

    const hash = crypto.createHash("md5").update(password).digest("hex")

    const user = await userModel.create({
        name,
        email,
        password: hash,
    });

    const token = jwt.sign(
        {
            id: user._id,
            email: user.email,
        },
        process.env.JWT_SECRET,
    );

    res.cookie("jwt_token", token);

    res.status(201).json({
        message: "User registered",
        user,
        token,
    });
});

/**
 * /api/auth/protected
 */
authRouter.post("/protected", (req, res)=>{
    console.log(req.cookies);
    
    res.status(201).json({
        message: "This is a protected message",
    });
})

/**
 * /api/auth/login
 */
authRouter.post("/login", async (req, res)=>{
    const {email, password} = req.body;

    const user = await userModel.findOne({email})

    if(!user){
        return res.status(404).json({
            message: "User not found with this email address"
        })
    }

    const isPasswordMatched = user.password === crypto.createHash("md5").update(password).digest("hex")

    if(!isPasswordMatched){
        return res.status(401).json({
            message: "Invalid Password. Please Try again"
        })
    }

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie("jwt_token", token)

    res.status(200).json({
        message: `Welcome ${user.name}`,
        user
    })
})

module.exports = authRouter;
