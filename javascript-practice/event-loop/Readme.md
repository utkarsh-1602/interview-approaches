## What is Event loop ? 
- An event loop is something that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty.

- In JavaScript, the event loop is a fundamental mechanism that enables the asynchronous execution of code. It’s an essential part of the JavaScript runtime environment, allowing the language to handle non-blocking operations efficiently. The event loop is responsible for managing the execution of code, handling events, and maintaining the flow of control.

- event loop creates an illusion that JavaScript is multi-threaded, but it is single threaded.

## How do Event loops work?
1. Call Stack: JavaScript uses a call stack to keep track of the currently executing function (where the program is in its execution).

2. Callback Queue:Asynchronous operations, such as I/O operations or timers, are handled by the browser or Node.js runtime. When these operations are complete, corresponding functions (callbacks) are placed in the callback queue.

3. Event Loop: The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first function from the callback queue and pushes it onto the call stack for execution.

4. Execution: The function on top of the call stack is executed. If this function contains asynchronous code, it might initiate further asynchronous operations.

5. Callback Execution: When an asynchronous operation is complete, its callback is placed in the callback queue.

6. Repeat: The event loop continues this process, ensuring that the call stack is always empty before taking the next function from the callback queue.

## memory allocation in JavaScript

1. Heap Memory - Data stored randomly and memory allocated.

2. Stack memory - Memory allocated in the form of stacks. Mainly used for functions.


## Drawbacks of Event Loop
While event loops are generally considered to be a good thing, there are some potential drawbacks to using them. One is that if an event loop is not used properly, it can lead to what is known as an “event storm” which can cause a program to become unresponsive. Another potential drawback is that if an event loop is not coded correctly, it can cause a program to enter into an infinite loop.


> Event Loop Interview Questions : https://climbtheladder.com/event-loop-interview-questions/
