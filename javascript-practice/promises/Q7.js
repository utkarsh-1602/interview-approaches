
console.log('start');

const x = Promise.resolve("learn javascript")
x.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)
})

console.log('end')