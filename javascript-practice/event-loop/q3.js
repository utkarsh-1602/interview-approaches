async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
}
  
async function async2() {
console.log("async2");
}

console.log("script start");

setTimeout(function () {
console.log("setTimeout");
}, 0);

async1();

new Promise(function (resolve) {
console.log("promise1");
resolve();
}).then(function () {
console.log("promise2");
});

console.log("script end");

/*
When the program is executed, it will first print script start, then setTimeout will be put into the macrotask queue, then call the async1 function, print async1 start, and then call await async2 () so async2 will be printed.

await will put things into the microtasks queue, so instead of printing async1 end immediately it will be put into the microtasks queue first.

Then the program continues to execute. When encountering new Promise, it first prints the promise 1 inside, then calls resolve, and puts .then into the microtasks queue. Program execution continues, printing script end.

Now, the execution stack is empty, so it will check the microtasks queue and print async1 end first. Since the microtasks queue will be executed all the way until there is nothing, the event loop will continue to check the microtasks queue. Then it finds that there is a resolve in it , so print promise2. At this time, the queue of microtasks is empty, it goes to the queue of macrotasks. There is a setTimeout in the macrotasks queue, so it is printed out.


*/