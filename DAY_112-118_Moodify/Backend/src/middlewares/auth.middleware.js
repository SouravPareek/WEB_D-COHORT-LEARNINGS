const redis = require("../config/cache")
const jwt = require("jsonwebtoken");

async function authUser(req, res, next) {
    const token = req.cookies?.token;

    if (!token) {
        return res.status(401).json({
            message: "Token not provided"
        });
    }

    try {
        let isTokenBlacklisted = false;

        try {
            isTokenBlacklisted = Boolean(await redis.get(token));
        } catch (cacheError) {
            console.warn("Redis blacklist check failed, continuing with JWT auth:", cacheError.message);
        }

        if (isTokenBlacklisted) {
            return res.status(401).json({
                message: "Invalid token"
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();
    } catch (err) {
        console.warn("Auth check failed:", err.message);
        return res.status(401).json({
            message: "Invalid token",
        });
    }
}

module.exports = {authUser}