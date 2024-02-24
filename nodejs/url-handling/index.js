const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    if(req.url === '/favicon.ico') return res.end() 
    const ipAddress = req.socket.remoteAddress;
    const log = `${Date.now()}: New request received from ${ipAddress} ${req.url}\n`;
    const myUrl = url.parse(req.url, true)
    console.log(myUrl)
    
    fs.appendFile('log.txt', log, () => {

        switch(myUrl.pathname){

            case '/':
                res.end('Homepage')
                break

            case '/about':
                const username = myUrl.query.name;
                res.end(`Hi, ${username}`)
                break

            case '/search':
                const search = myUrl.query.search_query;
                res.end(`Here are your search results for ${search}`)
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