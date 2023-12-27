// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () { resolve("Promise Resolved") }, 4000)
})

// async function
async function newFunct() {

    let response = promise;
    console.log(response)
    console.log("Hello")
}

newFunct()

// In the above program, a Promise object is created and it gets resolved after 4000 milliseconds. The await keyword waits for the promise to be complete (resolve or reject).Hence, hello is displayed only after promise value is available to the response variable. In the above program, if await is not used, hello is displayed before Promise resolved
