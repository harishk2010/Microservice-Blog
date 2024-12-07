const jwt = require('jsonwebtoken')
require('dotenv').config()

const verification = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', "")
        
        if (!token) {
            return res.status(401).send({ message: "Access denied. No token" })
        }

        const decoded = await jwt.verify(token, process.env.JWT_TOKEN)

        req.user = decoded

        next()

    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            console.error("JWT Error:", error.message);
            return res.status(400).send({ message: "Invalid token." });
        } else if (error.name === 'TokenExpiredError') {
            console.error("JWT Expired:", error.message);
            return res.status(401).send({ message: "Token has expired. Please log in again." });
        } else {
            console.error("JWT Verification Error:", error);
            return res.status(500).send({ message: "An internal error occurred during token verification." });
        }

    }
}
module.exports = verification
