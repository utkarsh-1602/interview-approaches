// When you create a promise and pass a call back to it that callback is gonna executed immediately (sync)

const promise = new Promise(function (resolve, reject) {
    //doing some logic it gonna be executed synchronously
    console.log("PROMISE 1: result");
})
console.log("PROMISE 1 : global log")



const promise2 = new Promise(function (resolve, reject) {
    //doing some logic it gonna be executed synchronously
    resolve("PROMISE 2 : fullfiled")
})
promise2.then(v => {
    console.log(v)
})
console.log("PROMISE 2: global log")
