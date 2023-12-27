// what will be the output ? 

console.log(1);

setTimeout(function () {
  console.log(2);
}, 0);

Promise.resolve()
  .then(function () {
    console.log(3);
  })
  .then(function () {
    console.log(4);
  });

/*

    Synchronous Execution:

    console.log(1);: Prints 1 to the console immediately.
    Microtask Queue (Promise):

    Promise.resolve().then(function () { console.log(3); }): The then method of the Promise is a microtask, which means it is executed in the next turn of the event loop. It prints 3.

    .then(function () { console.log(4); }): This is another microtask chained to the previous Promise. It prints 4.

    Macrotask Queue (setTimeout):

    setTimeout(function () { console.log(2); }, 0);: Even though the timeout is set to 0 milliseconds, it still goes into the macrotask queue. Macrotasks are executed in a later turn of the event loop, after microtasks. It prints 2.
    So, the order of execution is 1 (synchronous), 3 and 4 (microtasks), and finally 2 (macrotask). This showcases the event loop behavior in JavaScript, where microtasks are executed before macrotasks.

 */