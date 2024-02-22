// Promise.race : The Promise.race() static method takes an iterable of promises as input and returns a single Promise. The timer with the shortest time always wins the race and becomes the resulting promise's state.

/*
    Question: 
    You're given an asynchronous function (fn) that takes some input and does some work, but it might take too long to complete. You also have a time limit (t) in milliseconds.Your task is to create a new function (let's call it timeLimited) that wraps around the original function (fn). This new function should have the following behavior:
    If the original function (fn) completes its work within the given time limit (t), the new function should provide the result of the original function.
    If the original function (fn) takes longer than the time limit (t), the new function should reject and provide the reason "Time Limit Exceeded."    

    // Reference: https://leetcode.com/problems/promise-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript

*/

var timeLimit = function (fn, t) {
    return async function (...args) {
        let functionExecution = fn(...args);
        let functionRejection = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
        });

        // Corrected: Await both the execution and rejection promises
        try {
            const result = await Promise.race([functionExecution, functionRejection]);
            console.log(result);
        } catch (err) {
            throw err;
        }
    };
};

const limited = timeLimit((t) => new Promise(res => setTimeout(() => res(t), t)), 100);
limited(50).catch(console.log); // Output: "Time Limit Exceeded" at t=100ms
