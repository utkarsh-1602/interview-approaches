const fs = require('fs/promises');

async function readFileAsync(filePath) {
    try {
        let content = await fs.readFile(filePath, 'utf-8');
        console.log(content);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

// Usage
readFileAsync('path/to/file.txt');

// Reading a File Asynchronously (Node.js):
