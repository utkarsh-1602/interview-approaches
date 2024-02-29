let promise = new Promise(function (res, rej) {
    setTimeout(function () {
        res("Promise resolved")
    }, 4000)
})

async function myFuun() {
    try {
        // wait until promise is resolved
        let result = await promise;
        console.log(result)
    } catch (error) {
        console.log(error);
    }
}

myFuun()

// async function using error handling