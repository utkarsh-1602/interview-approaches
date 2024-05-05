const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.userRegistration = async (req, res) => {

    const { name, email, password, dateOfBirth } = req.body;

    // Define validation checks using express-validator
    const validationChecks = [
        check("email", "email is required").notEmpty(),
        check("password", "Password is required").notEmpty(),
        check("dateOfBirth", "Date of birth is required").notEmpty(), // Add validation for dateOfBirth
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
            dateOfBirth: dateOfBirth,
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

exports.getUsers = async(req, res) => {
    try {
    
        const users = await User.find(); // Retrieve all users from the database
        res.status(200).json(users); // Send the retrieved users as JSON response    

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}