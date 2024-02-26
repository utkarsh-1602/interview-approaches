const User = require("../models/user");
const {setUser} = require('../service/auth')

exports.handleUserSignup = async(req, res) => {
    try {
        const {name, email, password} = req.body;

        console.log(name, email, password)

        await User.create({
            name: name, 
            email: email, 
            password: password
        })

        return res.status(201).redirect("/");

    } catch (error) {
        console.log("Error in Signup:  ", error);
    }
}

exports.handleUserLogin = async(req, res) => {
    try {
        const {email, password} = req.body;

        console.log(email, password);

        const user = await User.findOne({
            email: email, 
            password: password
        })

        console.log(user)

        if(!user) {
            console.log("User not found")
            return res.status(400).render("login", {
                error: "Invalid username or password"
            })
        }

        const token = setUser(user);
        console.log(token)

        res.cookie("myToken", token)

        return res.redirect("/");

    } catch (error) {
        console.log("Error in Signup:  ", error);
    }
}