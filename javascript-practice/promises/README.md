# Promises

### What are Promises ? 
- In JavaScript, promises are a mechanism for handling asynchronous operations.
- You can create a new promise using the Promise constructor. The constructor takes a function as an argument, which in turn takes two parameters: resolve and reject. Inside this function, you perform the asynchronous operation, and when it's completed, you call either resolve to indicate success or reject to indicate failure.
- Once a promise is created, you can use the .then() and .catch() methods to handle the result or error respectively.

Promises can be in one of three states:
1. Pending: Initial state, neither fulfilled nor rejected.
2. Fulfilled: The operation completed successfully.
3. Rejected: The operation failed.

- `Promise.all()`:  Takes an array of promises and returns a single promise that resolves when all of the input promises have resolved, or rejects with the reason of the first promise that rejects.
- `The Promise.race()` method returns a Promise from a list of promises, when the faster promise settles.

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
