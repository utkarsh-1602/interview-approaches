// Implement memoize function 

const BigProduct = (num1, num2) => {

    for(let i=0; i<100000000; i++){}

    return num1*num2;

}


function myMemoize(fn, context){
    const res = {};
    // The result of the computation (14002462) is stored in the res cache object with the key "[4597,3046]".
    
    return function(...args){
        var argsCache = JSON.stringify(args);
        if(!res[argsCache]){
            // This condition checks if the result for the current set of arguments is already cached. If it's not cached (!res[argsCache]), it means that the function needs to be called with these arguments.
            res[argsCache] = fn.call(context || this, ...args)
            // So, fn.call(context || this, ...args) is invoking the function fn, setting the this value to context if provided, or keeping it as the current value of this, and passing any additional arguments to the function fn.
        }
        return res[argsCache];
    }
}

const myMemoizeFunction = myMemoize(BigProduct);

console.time("calling")
console.log(myMemoizeFunction(4597, 3046))
console.timeEnd('calling')

console.time("calling")
console.log(myMemoizeFunction(4597, 3046))
console.timeEnd('calling')

console.time("calling")
console.log(myMemoizeFunction(4597, 3046))
console.timeEnd('calling')

console.time("calling")
console.log(myMemoizeFunction(4597, 3046))
console.timeEnd('calling')
