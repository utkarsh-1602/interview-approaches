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

Initial Synchronous Execution:

console.log("begins");: Prints "begins" to the console.
Macrotasks (setTimeout):

setTimeout(() => { console.log("setTimeout 1"); ... }, 0);: Schedules a macrotask to be executed in the next event loop iteration.
Microtasks (Promise):

Promise.resolve().then(() => { console.log("promise 1"); });: Adds a microtask to the microtask queue.
Promise Executor:

new Promise(function (resolve, reject) { console.log("promise 2"); ... });: Executes the promise executor immediately, logging "promise 2."
Nested Macrotask (setTimeout inside Promise):

setTimeout(function () { console.log("setTimeout 2"); resolve("resolve 1"); }, 0);: Schedules a macrotask inside the promise executor to be executed in the next event loop iteration.
Microtask (then):

.then((res) => { console.log("dot then 1"); ... });: Adds a microtask to the microtask queue.
Final Output Expectation:

The order of execution will be "begins," "promise 2," "dot then 1," "setTimeout 1," "promise 1," "setTimeout 2," "resolve 1," and finally, the logged value of res from the second setTimeout callback.


*/
