# What is async Function ?
Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.

# What is await Function ?
Await function is used to wait for the promise. It could be used within the async block only.
It makes the code wait until the promise returns a result.


# Where Async function is being executed? is it in execution stack or callback queue

- all sync JavaScript code is executed in execution stack . all async JavaScript callback function is placed in callback queue . event loop will wait to put callback functions into execution stack from callback queue until when execution stack gets empty.( to get execution stack empty, all of the sync code should be completed its execution).
- When an async call is made, its entire stack is saved in the callback queue until the call completes. When this happens, the stack is moved back out of the queue and becomes the current execution stack. No code actually executes “in the queue”, it’s always executed in the context of the currently scheduled activation stack (also known as the “main thread”).

> For Example: 
- In my backend server created by using node.js i have get http request which has been accessed by two user A and B . user A hit the server first then user B hit server. This is a asyn request. As soon as user A hit server, the callback function for User A will be put in callback queue, then user B hit server , callback function for B will be in callback queue. Now callaback queue look like [a,b]. Just imagine that my call stack or execution stack is not empty. Some of blocking operation has to be finished until then user A and User B will be callback queue. My doubt is that whether user B has to wait till then completion of execution of A could be completed.
- If B’s async task completes before A’s does, then it will run before A, it doesn’t have to wait. The “queue” is actually a priority queue, so async tasks that are ready to run again will be given a priority that moves them to the front of the queue, ahead of the others that haven’t completed yet, and behind any others that have also become ready to run.
- The execution of JavaScript code only completes in a thread, but things like reading files or reading/writing from the network happen “in the background”, outside of JS’s normal flow of control. Promises and async/await are how those kind of background processes are synchronized back to JS’s main thread.
- To perform execution of such networking operation or I/O operation it use system thread. Once that operation is completed , it will be moved into the front of the queue.
- When an async task gets blocked on I/O, it gets moved onto the system thread, which runs at the same time as the main thread, and runs all I/O simultaneously (using the OS’s scheduling primitives). When the I/O completes, it gets put back onto the queue with a “ready” priority, where it will then get de-queued and scheduled on the main thread again.