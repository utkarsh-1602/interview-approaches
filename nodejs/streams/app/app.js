const express = require('express')
const status = require('express-status-monitor')
const fs = require('fs')
const zlib = require('zlib')

const app = express()
const PORT = 8000


fs.createReadStream('./sample.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('./sample.zip'))

app.use(status())

app.get("/", (req, res) => {
    const stream = fs.createReadStream('./sample.txt', 'utf-8')
    stream.on('data', (chunk) => {
        res.write(chunk);
    })
    stream.on('end', () => res.end());
})

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})