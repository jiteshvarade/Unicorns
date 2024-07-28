const User = require("../models/user.js")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/email.js");
const {SECRETKEY} = require("../../constants.js")

const signUp = async (req, res) => {
    const {name, email ,password} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user) {
            const hashedPassword = bcrypt.hash(password, 10);

            const newUser = await User({name, email, hashedPassword});
            newUser.save();

            const token = jwt.sign({email}, SECRETKEY, { expiresIn: "24h" });

            let subject = `Welcome to Unicorn, ${name}!`;

            let html = `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                    </head>
                    <body>
                        <h1>Hi ${name},</h1>
                        <p>We're thrilled to welcome you to the Unicorn community!</p>
                        <h2>Getting Started</h2>
                        <p>If you have any questions or need help navigating the website, please don't hesitate to contact our friendly support team at <a href="https://unicorn-b-project.netlify.app/">Unicorn</a>.</p>
                        <p>Welcome aboard! We're excited to have you as part of the community.</p>
                        <p>Best regards,</p>
                        <p>The Unicorn Team</p>
                    </body>
                    </html>
                    `;

            await sendEmail(email, subject, html);

            console.log("Account created successfully!");
            res.status(201).json({token, email, message: "Account created successfully!" });

        } else {
            res.send("User already exists!");
        }

    } catch (error) {
        console.log(error);
        res.status(500).send("SignUp Failed!");
    }
};

const login = async (req, res) => {

};

const verify = async (req, res) => {

};

module.exports = {signUp, login, verify};