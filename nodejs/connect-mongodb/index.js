const express = require('express');
const app = express();
const dbConnection = require('./db')
const UserModel = require('./model')

app.use(express.urlencoded({extended: true}))

app.post('/api/users', async (req, res) => {
    try {
        const body = req.body;
        console.log(body)

        if(!body.email || !body.first_name || !body.last_name || !body.gender || !body.job_title){
            res.status(400).json({message: "All fields are required"})
        }

        const addUser = await UserModel.create({
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            gender: body.gender,
            job_title: body.job_title
        })

        console.log(addUser)
        return res.status(201).json({message:"new User Added in MongoDB database", addUser})

    } catch (error) {
        console.log(error)
    }
})

app.get('/users', async (req, res) => {
    try {

        const findAllUsers = await UserModel.find();
        if(!findAllUsers){
            return res.status(404).json({message: "Users not found"})
        }
        return res.status(200).json({message: "Users in MongoDB database", findAllUsers})

    } catch (error) {
        console.log("Error to find Users: ", error)
    }
})

app.get('/users/:id', async (req, res) => {
    try {

        const findAllUsers = await UserModel.find();
        if(!findAllUsers){
            return res.status(404).json({message: "Users not found"})
        }
        return res.status(200).json({message: "Users in MongoDB database", findAllUsers})

    } catch (error) {
        console.log("Error to find Users: ", error)
    }
})

app.listen(8000, () => {
    console.log('listening on port 8000');
})