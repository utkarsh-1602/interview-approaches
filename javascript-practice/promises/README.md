# Promises

### Are Promises sync or async ? 
- Promises aren't exactly synchronous or asynchronous in and of themselves. When you create a promise the callback you pass to it is immediately executed and no other code can run until that function yields. 
- promises are a common way of dealing with asynchronous code. The most common use case for a promise is to represent some value that's being generated or fetched in an asynchronous fashion. Logic that depends on that value can asynchronously wait until the value is available by registering a callback with .then() or related Promise methods.
- When you create a promise and pass a call back to it that callback is gonna executed immediately (sync)
`
const promise= new Promise(function(resolve, reject) {
      //doing some logic it gonna be executed synchronously
       console.log("result");
    })
    console.log("global log")
`

