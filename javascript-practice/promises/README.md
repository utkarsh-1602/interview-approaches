# Promises

### What are Promises ? 
- Promises are like normal classes in Javascript. Assume you are creating your own Promise implementation, your promise class would roughly look like this. Notice in your constructor you are expecting a method to be passed that you call immediately passing `resolve` and `reject` as parameters.
```
class Promise {
    constructor(method) {
        method(resolve, reject)
    }

    resolve() { ... }

    reject() { ... }

    then() { ... }
}

```
- So when you do new Promise(), you are just creating a new object. Your Promise constructor will run, and it will call the method immediately. So that is why the code inside your promise gets executed synchronously. 
```
return new Promise (function(resolved,reject){
    //sync or async? 
});

```


### Are Promises sync or async ? 
- Promises aren't exactly synchronous or asynchronous in and of themselves. When you create a promise the callback you pass to it is immediately executed and no other code can run until that function yields. 
- promises are a common way of dealing with asynchronous code. The most common use case for a promise is to represent some value that's being generated or fetched in an asynchronous fashion. Logic that depends on that value can asynchronously wait until the value is available by registering a callback with .then() or related Promise methods.
- When you create a promise and pass a call back to it that callback is gonna executed immediately (sync)
- But when you resolve it by .then() method it will act in asynchronous way 
