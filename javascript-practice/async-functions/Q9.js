console.log('start')

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 2000)
})

promise.then((res) => {
    console.log("result: " + res)
})
.catch((error) => {
    console.log("error: " + error)
})

console.log('end')