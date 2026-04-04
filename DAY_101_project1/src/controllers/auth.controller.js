const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");


async function registerController(req, res){
    const { username, email, password, bio, profileImage } = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        $or: [{ username }, { email }],
    });

    if (isUserAlreadyExists) {
        return res.status(409).json({
            message: "User already exists",
        });
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        password: hash,
        bio,
        profileImage,
    });

    const token = jsonwebtoken.sign(
        {
            id: user._id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" },
    );

    res.cookie("token", token);

    res.status(201).json({
        message: "User registered successfully",
        user: {
            email: user.email,
            username: user.username,
            bio: user.bio,
            profileImage: user.profileImage,
        },
        token: token,
    });
}

async function loginController(req, res){
    const { email, username, password } = req.body;

    const user = await userModel.findOne({
        $or: [
            {
                username: username,
            },
            {
                email: email,
            },
        ],
    });

    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "password invalid",
        });
    }

    const token = jsonwebtoken.sign(
        {
            id: user._id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" },
    );

    res.cookie("token", token)

    res.status(200).json({
        message: "User loggedIn successfully.",
        user:{
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage : user.profileImage
        }
    })
}

module.exports = {
    registerController,
    loginController
}