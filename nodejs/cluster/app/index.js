const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.json({message: `Hello from express server ${process.pid}`})
})

app.listen(8000, () => {
    console.log('listening on Port 8000');
})