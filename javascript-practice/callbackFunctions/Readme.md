# Callback Function 
- A function that is passed as an argument to another function so that it can be executed in that other function is called as a **callback function**.
- Callback functions are commonly used in asynchronous programming to handle tasks that take time to complete, such as making API requests, reading files, or processing data.

## Can you illustrate how Callback Functions can create “callback hell” and how to avoid it?
- Callback functions can lead to “callback hell” when they are nested within each other, creating a pyramid of doom. This happens because JavaScript executes code sequentially and relies on callbacks for asynchronous operations.

- consider the following example: 
```javascript
getData(function(a){
    getMoreData(a, function(b){
        getEvenMoreData(b, function(c){ 
            console.log('Do something with', c);
        });
    });
});
```

- This is callback hell due to the deep nesting and difficulty in error handling.
- **To avoid callback hell**, we can use `Promises` or `async/await` syntax which makes asynchronous code look synchronous, improving readability and error handling

```javascript
getData()
.then(a => getMoreData(a))
.then(b => getEvenMoreData(b))
.then(c => {
    console.log('Do something with', c);
})
.catch(error => console.error(error));

```


## How can you ensure that Callback Functions do not block the main thread?
To ensure callback functions do not block the main thread, you can use asynchronous programming. This allows multiple things to happen at the same time. When a function is called, Node.js will complete its execution and return immediately, freeing up the main thread.

## What is the difference between synchronous and asynchronous Callback Functions?
- **Synchronous callbacks** execute immediately, blocking other operations until completion. synchronous Callback functions are used when one step in a process needs to wait for a previous step to finish before it can continue.

- **Asynchronous callbacks**, however, don’t block execution and are typically used for tasks like I/O operations that can take unpredictable time to complete. These functions return immediately while the task runs in the background, allowing other operations to proceed concurrently. When the task finishes, the callback function is invoked with the result

