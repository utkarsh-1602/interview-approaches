## What is Event loop ? 
- An event loop is something that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty.

- In JavaScript, the event loop is a fundamental mechanism that enables the asynchronous execution of code. It’s an essential part of the JavaScript runtime environment, allowing the language to handle non-blocking operations efficiently. The event loop is responsible for managing the execution of code, handling events, and maintaining the flow of control.

- event loop creates an illusion that JavaScript is multi-threaded, but it is single threaded.

- An Event Loop in JavaScript is said to be a constantly running process that keeps a tab on the call stack. Its main function is to check whether the call stack is empty or not. If the call stack turns out to be empty, the event loop proceeds to execute all the callbacks waiting in the task queue. Inside the task queue, the tasks are broadly classified into two categories, namely micro-tasks and macro-tasks.


## Micro-tasks

- **Microtasks** are tasks that are executed in the current event loop iteration, right after the synchronous part of the code and before the next macrotask.
`Promises` (and their `then` and `catch` callbacks) and certain DOM events like `MutationObserver` callbacks are examples of microtasks.
Microtasks have higher priority than macrotasks and are executed before macrotasks in the event loop.

- **Microtasks**, are smaller tasks that update the application state and should be executed before the browser continues with other assignments such as re-rendering the UI. Microtasks include promise callbacks and DOM mutation changes. Microtasks enable us to execute certain actions before the UI is re-rendered, thereby avoiding unnecessary UI rendering that might show an inconsistent application state


## Macro-tasks

- **Macrotasks** are tasks that are scheduled to be executed in the next event loop iteration.
- Examples of macrotasks include `setTimeout, setInterval, I/O operations, network events, Html parsing, changing Url, keyboard events, mouse events ` etc.
- Macrotasks have lower priority than microtasks, and they are executed after microtasks in the event loop.


## Here's a simple illustration of the event loop sequence:


|---------------------------------------|
|    Synchronous Execution              |
|---------------------------------------|
|    Microtask Queue (Promise, etc.)    |
|---------------------------------------|
|    Macrotask Queue (setTimeout, etc.) |
|---------------------------------------|


- When the execution stack is empty (after synchronous code execution), the event loop checks the microtask queue. If there are microtasks, they are executed one by one until the microtask queue is empty. After that, the event loop checks the macrotask queue and executes the next macrotask. This process continues in a loop.

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
