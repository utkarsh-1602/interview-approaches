const User = require("../models/user");
const { v4: uuidv4 } = require('uuid');
const {setUser} = require('../service/auth')

exports.handleUserSignup = async(req, res) => {
    try {
        const {name, email, password} = req.body;

        await User.create({
            name: name, 
            email: email, 
            password: password
        })

        return res.status(201).render("/");

    } catch (error) {
        console.log("Error in Signup:  ", error);
    }
}

exports.handleUserLogin = async(req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({
            email: email, 
            password: password
        })

        if(!user) {
            return res.status(400).render("login", {
                error: "Invalid username or password"
            })
        }

        const token = setUser(user);
        console.log(token)

        res.cookie("myToken", token)

        return res.status(201).redirect("/");

    } catch (error) {
        console.log("Error in Signup:  ", error);
    }
}