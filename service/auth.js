const jwt = require("jsonwebtoken");
const secretKey = "Khushal@123";

// This function generates a JWT for the given user
function setUser(user) {
    const token = jwt.sign({
        _id: user._id,
        email: user.email,
    }, secretKey); // Secret key should be the second argument, not part of the payload
    console.log('Generated Token:', token); // Debug statement
    return token;
}

// This function verifies the JWT and returns the user data if the token is valid
function getUser(token) {
    if (!token) return null;
    try {
        const decoded = jwt.verify(token, secretKey); // Verify token using the secret key
        // console.log('Decoded Token:', decoded); // Debug statement
        return decoded;
    } catch (err) {
        console.error('Invalid token:', err.message); // Handle invalid token error
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
};
