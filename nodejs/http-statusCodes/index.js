const { urlencoded } = require('body-parser');
const users = require('./MOCK_DATA.json')
const express = require('express')
const app = express()

app.use(urlencoded({extended: true}))

app.post('/api/users', (req, res) => {
    
    const body = req.body;
    console.log(body)

    if(!body.email || !body.first_name || !body.last_name || !body.gender || !body.job_title){
        res.status(400).json({message: "All fields are required"})
    }

})

// dynamic path parameters
app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id)
    console.log(id)
    const user = users.find(user => user.id === id);

    if(!user){
        res.status(404).json({error: 'User not found'});
    }

    return res.json(user)
})


app.listen(8000, () => {
    console.log('listening on port 8000')
})