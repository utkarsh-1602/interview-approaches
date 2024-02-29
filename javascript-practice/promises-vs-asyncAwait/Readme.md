# promise vs async await

1. Syntax: Promises use .then() and .catch() for handling resolved values and errors, while async/await uses await within async functions to wait for promises to resolve, creating a more synchronous style.

2. Error Handling: With Promises, errors are handled using .catch() or chaining multiple .then() blocks. async/await allows error handling using try/catch blocks, which can be more intuitive and resemble synchronous error handling.

3. Readability: async/await often results in cleaner and more readable code, especially for complex asynchronous flows, by resembling synchronous code structure.
