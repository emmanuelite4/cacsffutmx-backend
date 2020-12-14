var { AuthenticationError } = require("apollo-server-express");

var jwt = require("jsonwebtoken");

const SECRET_KEY = "secret!";
async function context({ req }) {
    const token = req.cookies["jwt"] || "";
    // console.log(req.cookies);
    try {
        const { id, email } = await jwt.verify(token, SECRET_KEY);
        // console.log(email);
        // console.log("hello world");
        return { id, email };
    } catch (e) {
        throw new AuthenticationError(
            "Authentication token is invalid, please login"
        );
    }
}

module.exports = context;
