const fs = require('fs')

fs.writeFileSync('text1.txt', 'hello world sync')
//sync function,  creates a new file

fs.writeFile('text2.txt', 'hello world async', (err) => {})
// async function, creates a new file

const res = fs.readFileSync('./contacts.txt', "utf-8")
console.log(res)  

fs.readFile('./contacts.txt', 'utf-8', (err, res) => {
    if(err){
        console.log("Error: ", err)
    }
    else{
        console.log(res)
    }
})

fs.appendFileSync('./contacts.txt', 'hey there\n')
// append data in the file synchronously


fs.cpSync('./contacts.txt', './copy.txt')
// create a copy file 

fs.unlinkSync('./copy.txt')
// delete a file 

console.log(fs.statSync('./contacts.txt'))
// return stats of the file 

console.log(fs.statSync('./contacts.txt').isFile())
// checks if it is file or not, and returns boolean value


// fs.mkdirSync('controllers')
// make a directory syncrhonously

fs.mkdirSync('models/users/A', {recursive: true})