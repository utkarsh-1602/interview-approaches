const express = require('express')
const fs = require('fs')
const users = require('./MOCK_DATA.json')

const app = express()

app.use(express.urlencoded({ extended: true }))

// middleware
app.use((req, res, next) => {
    console.log("Hello from middleware 1");
    req.myUsername = "utkarshhhadgekar" // we can pass any fields in req, and it will be available to all of the methods and middlewares
    // return res.json("this is a middleware") 
    // if you call return, it won't execute any routes, and it will only return the res.json in middleware 
    // but to get to next middleware or api methods, you need to call next()
    next()
})

app.use((req, res, next) => {
    console.log("hello from middleware 2");
    next()
})

app.use((req, res, next) => {
    fs.appendFile(
        "log.txt", 
        `${Date.now()}: ${req.method}: ${req.path}\n`,
         (err, data) => {
        next();
        })
})

app.get('/users', (req, res) => {
    // The default behavior of .toString() for an array is to join its elements with a comma separator, therefore use .join('')
    const html = `
        <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join('')}
        </ul>
    `
    console.log(req.headers)
    res.setHeader('X-myName', 'utkarsh hadgekar') // custom header
    // best practices: always add X to custom header
    res.send(html)
})
app.get('/api/users', (req, res) => {
    res.status(200).json(users)
})

// dynamic path parameters
app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id)
    console.log(id)
    const user = users.find(user => user.id === id);
    return res.json(user)
})

app.post('/api/users', (req, res) => {
    const body = req.body;
    console.log("Body: " + body);
    users.push({id: users.length + 1, ...body})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({status: "new user added", id: users.length})
    })
})

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})