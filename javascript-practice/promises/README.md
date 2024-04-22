# Promises

## What are Promises ? 
- Promise basically represents the upcoming completion or failure of a asynchronous operation and its resulting value. 
- You can create a new promise using the Promise constructor. The constructor takes a function as an argument, which in turn takes two parameters: resolve and reject. Inside this function, you perform the asynchronous operation, and when it's completed, you call either resolve to indicate success or reject to indicate failure.
- Once a promise is created, you can use the .then() and .catch() methods to handle the result or error respectively.
- if the promise is resolved it will return the result.
- if the promise is rejected it will return the error

Promises can be in one of three states:
1. Pending: Initial state, neither fulfilled nor rejected.
2. Fulfilled: The operation completed successfully.
3. Rejected: The operation failed.


## Promise Combinators


### Promise.all()
- `Promise.all()`:  Takes an array of promises and returns a all promises that are resolved, or returns the only one promise which has been rejected from all promises. 

```javascript
Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
```

- checkout example :
[Q10](Q10.js)

### Promise.race()

- `The Promise.race()` method returns a Promise from a list of promises, when the faster promise settles.

```javascript
class Promise {
    constructor(method) {
        method(resolve, reject)
    }

    resolve() { ... }

    reject() { ... }

    then() { ... }
}

```

- checkout example :
[Q11](Q11.js)


### Promise.allSettled()

The Promise.allSettled() method returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describes the outcome of each promise. This can be useful when you have multiple asynchronous tasks to perform and you want to know the result of each task regardless of whether they succeeded or failed.

- checkout example :
[Q12](Q12.js)



### Promise.any()
Promise.any method returns all the resolved promise from all the (resolved or rejected) promises. and if all promises are rejected then it returns the errors of that promises. 

- checkout example :
[Q13](Q13.js)



## Promise Chaining 

- Promise chaining is a concept commonly used in JavaScript, particularly in asynchronous programming. It's a way to handle multiple asynchronous operations sequentially or conditionally, ensuring that one operation completes before the next one starts.

- checkout examples:
[Q9](Q9.js)


## Are Promises sync or async ? 
- So when you do new Promise(), you are just creating a new object. Your Promise constructor will run, and it will call the method immediately. So that is why the code inside your promise gets executed synchronously. 

```javascript
return new Promise (function(resolved,reject){
    //sync or async? 
});

```

- Promises aren't exactly synchronous or asynchronous in and of themselves. When you create a promise the callback you pass to it is immediately executed and no other code can run until that function yields. 
- promises are a common way of dealing with asynchronous code. The most common use case for a promise is to represent some value that's being generated or fetched in an asynchronous fashion. Logic that depends on that value can asynchronously wait until the value is available by registering a callback with .then() or related Promise methods.
- When you create a promise and pass a call back to it that callback is gonna executed immediately (sync)
- But when you resolve it by .then() method it will act in asynchronous way 
