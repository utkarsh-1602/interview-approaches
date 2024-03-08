const cluster = require('node:cluster');
const os = require('os');

const totalCPUs = os.cpus().length;

if(cluster.isPrimary){

    for(let i = 0; i < totalCPUs; i++){
        cluster.fork();
        // fork() is typically used to create a new process by duplicating the current process.
    }
}
else{
    const express = require('express');
    const app = express();

    app.get('/', (req, res) => {
        return res.json({message: `Hello from express server ${process.pid}`})
    })
    
    app.listen(8000, () => {
        console.log('listening on Port 8000');
    })
}
