# What is the purpose of the async and await keywords in JavaScript, and how do they work?
The async and await keywords in JavaScript are used to handle asynchronous functions and promises.

### `async` keyword
The `async` keyword is used to define asynchronous functions When you use async before a function declaration, it indicates that the function will always return a promise.

### `await` keyword
The `await` keyword is used inside an async function to wait for a promise to be resolved or reject. It can only be used inside an async function. If the promise is fulfilled, await returns the resolved value; if the promise is rejected, it throws an error that can be caught using a try...catch block.

### What is Asynchronous Programming 
Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.

# Where Async function is being executed? is it in execution stack or callback queue

- all sync JavaScript code is executed in execution stack . all async JavaScript code is placed in callback queue . event loop will wait to put callback functions into execution stack from callback queue until when execution stack gets empty.( to get execution stack empty, all of the sync code should be completed its execution).
- When an async call is made, its entire stack is saved in the callback queue until the call completes. When this happens, the stack is moved back out of the queue and becomes the current execution stack. No code actually executes “in the queue”, it’s always executed in the context of the currently scheduled activation stack (also known as the “main thread”).

> For Example: 
- In my backend server created by using node.js i have get http request which has been accessed by two user A and B . user A hit the server first then user B hit server. This is a asyn request. As soon as user A hit server, the callback function for User A will be put in callback queue, then user B hit server , callback function for B will be in callback queue. Now callaback queue look like [a,b]. Just imagine that my call stack or execution stack is not empty. Some of blocking operation has to be finished until then user A and User B will be callback queue. My doubt is that whether user B has to wait till then completion of execution of A could be completed.
- If B’s async task completes before A’s does, then it will run before A, it doesn’t have to wait. The “queue” is actually a priority queue, so async tasks that are ready to run again will be given a priority that moves them to the front of the queue, ahead of the others that haven’t completed yet, and behind any others that have also become ready to run.
- The execution of JavaScript code only completes in a thread, but things like reading files or reading/writing from the network happen “in the background”, outside of JS’s normal flow of control. Promises and async/await are how those kind of background processes are synchronized back to JS’s main thread.
- To perform execution of such networking operation or I/O operation it use system thread. Once that operation is completed , it will be moved into the front of the queue.
- When an async task gets blocked on I/O, it gets moved onto the system thread, which runs at the same time as the main thread, and runs all I/O simultaneously (using the OS’s scheduling primitives). When the I/O completes, it gets put back onto the queue with a “ready” priority, where it will then get de-queued and scheduled on the main thread again.


# Process of asynchronous function working 
1. When an asynchronous operation is encountered within an async function, it is initiated. For example, if it's a promise, the promise begins its execution.
2. While the asynchronous operation is in progress, the JavaScript runtime continues to execute other synchronous code in the execution stack.
3. Once the asynchronous operation completes, its associated callback function (or promise resolution) is enqueued into the callback queue.
4. The event loop continually checks the callback queue for tasks. When the execution stack is empty (meaning there's no more synchronous code to execute), the event loop takes the first task from the callback queue and moves it to the execution stack for execution.

