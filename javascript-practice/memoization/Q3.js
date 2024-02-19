// Without Implementing caching/memoize function 

const BigProduct = (num1, num2) => {

    for(let i=1; i<= 100000000; i++){}
    return num1*num2;

}
// The for loop in the BigProduct function appears to be a placeholder for simulating a time-consuming operation. It doesn't serve any practical purpose other than delaying the execution of the function.

console.time("call")
console.log(BigProduct(4597, 3046))
console.timeEnd("call")

console.time("call")
console.log(BigProduct(4597, 3046))
console.timeEnd("call")

console.time("call")
console.log(BigProduct(4597, 3046))
console.timeEnd("call")

console.time("call")
console.log(BigProduct(4597, 3046))
console.timeEnd("call")

// The reduction in time after calling the function multiple times is due to JavaScript's Just-In-Time (JIT) compilation and potential caching of function results by the JavaScript engine.

