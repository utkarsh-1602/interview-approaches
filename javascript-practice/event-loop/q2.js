console.log("begins");

setTimeout(() => {
  console.log("setTimeout 1");
  Promise.resolve().then(() => {
    console.log("promise 1");
  });
}, 0);

new Promise(function (resolve, reject) {
  console.log("promise 2");
  setTimeout(function () {
    console.log("setTimeout 2");
    resolve("resolve 1");
  }, 0);
}).then((res) => {
  console.log("dot then 1");
  setTimeout(() => {
    console.log(res);
  }, 0);
});

/*
    => begins 
    (macrotask settimeout iteration2 
        => settimeout 1 
        => promise 1 
        ) 
    (microtask promise
    => promise 2 
    (macrotask settimeout iteration 2 
        setimeout2 
        )
    unresolved -> resolved 
    )
    dot then 1 

    begines
    promise 2 
    setimeout1
    promise 1 
    setimeout2
    dot then 1 
    resolve 1 

*/

/*

    begins 
    settimeout - iteration2 
    promise2 
    settimeout - iteration2 
    dot then 1 
    settimeout - iteration2
    settimeout 1 
    promise1 
    settimeout 2 
    resolve 1 
    res 


    final output : 
    begins
    promise2
    dot then 1 
    settimeout 1 
    promise 1 
    settimeout 2 
    resolve 1 
    res 

    wrong 
 */

// Solution 
/*
After the program code is executed, the program will be executed in order, so begin will be printed first. Then, the setTimeout will be placed in the macrotask queue.

That is why new Promise will be executed first. It will print out promise 2, and then the setTimeout within the promise will be put into the macrotask queue.

Now, the main thread is empty again, so the event loop will check the macrotask queue, execute the first setTimeout in the queue, then print setTimeout 1, and then put the Promise.resolve() within it to the microtasks queue.

Because the macrotask will only execute the first item each time, we turn to the microtask queue, then we will find that there is a Promise.resolve(), so promise 1 will be printed. Now, the microtasks queue is empty, so go back and look at the macrotasks queue.

In the macrotasks queue, there is a setTimeout, so it prints setTimeout 2. Then since resolve is called here, it enters .then and prints out dot then 1. And setTimeout will be put in the macrotask queue, because the microtask queue is empty now, setTimeout in the macrotask queue will be put on the execution stack, and then print console.log(res). The value of resolve is resolve 1, so resolve 1 is printed at the end.

*/
