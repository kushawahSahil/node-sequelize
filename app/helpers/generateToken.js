const jwt = require("jsonwebtoken");

// Middleware for Generating a new JWT Token
const generateToken = (req, res, next) => {
    let token = jwt.sign({ Email: req.body.Email }, process.env.PRIVATE_KEY, { expiresIn: '1hour' });
    res.header('auth-token', token);
    next();
};

module.exports = {
    generateToken
};