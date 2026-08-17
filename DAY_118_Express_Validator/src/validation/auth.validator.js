import { body, validationResult } from "express-validator";

const validate = (req, res, next) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next();
    }

    res.status(400).json({
        errors: errors.array(),
    });
};

export const registerValidation = [
    body("username").isString().withMessage("username is required"),
    body("email").isEmail().withMessage("email should be valid email address"),
    body("password").isStrongPassword().isLength({min: 6}).withMessage("password should be strong and should be between 6 and 12 chars"),

    validate
];
