const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

exports.userRegistration = async (req, res) => {

    console.log("HEELLEEOOO")
    const { name, email, password } = req.body;

    console.log(name, email, password);

    // Define validation checks using express-validator
    const validationChecks = [
        check("email", "email is required").notEmpty(),
        check("password", "Password is required").notEmpty(),
    ];

    // Run validation checks
    await Promise.all(validationChecks.map(validation => validation.run(req)));

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
            status: false
        });
    }

    try {

        let user = await User.findOne({
            email
        });
        if (user) {
            return res.status(400).json({
                msg: "User Already Exists"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name: name,
            email: email,
            password: hashedPassword
        })

        console.log(newUser) // CUSER CREATED

        const payload = {
            newUser: {
                id: newUser.id
            }
        };

        console.log("Payload : ", payload)

        jwt.sign(
            payload,
            "randomString", {
            expiresIn: 10000
        },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    token
                });
            }
        );



        return res.status(200).json({ msg: 'User registered successfully' });
    }

    catch (error) {
        console.error(error);
        return res.status(500).json({ error: `Registration Failed ${error}` });
    }
}


exports.userLogin = async (req, res) => {

    const { email, password } = req.body;

    // Define validation checks using express-validator
    const validationChecks = [
        check("email", "email is required").notEmpty(),
        check("password", "Password is required").notEmpty(),
    ];


    try {

        let user = await User.findOne({
            email
        });
        if (!user) {
            return res.status(400).json({ message: "User Not Exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect Password !" });
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        // TODO: Make a Token Middleware in middleware folder
        jwt.sign(
            payload,
            "secret",
            {
                expiresIn: 3600
            },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({
                    message: "User Logged in successfully",
                    token: token
                });
            }
        );

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }


}