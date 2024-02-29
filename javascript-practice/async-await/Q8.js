// what's the output
console.log('start')


const x = new Promise((resolve, reject) => {
    console.log('yo')
    console.log(23)
})

x.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log("Error: ", err);
})

console.log('end')