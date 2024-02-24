const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const ipAddress = req.socket.remoteAddress;
    const log = `${Date.now()}: New request received from ${ipAddress} ${req.url}\n`;
    fs.appendFile('log.txt', log, () => {

        switch(req.url){
            case '/':
                res.end('Homepage')
                break
            case '/about':
                res.end('About page')
                break
            default:
                res.end('404 Not Found')
        }

    })
})

const PORT = 8000;
myServer.listen(PORT, () => {
    console.log("Server listening on port " + PORT)
})