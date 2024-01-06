// Memoization using higher order function

function memoize(func){
    const cache = {}

    return function(...args){

        const key = JSON.stringify(args)

        if(cache[key]){
            return cache[key]       
        }

        // This usage of apply is useful when you want to call a function with an array of arguments, and each element of the array corresponds to one argument of the function

        const result = func.apply(this, args)
        cache[key] = result

        return result
    }
}

function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

const fibonacciMemoized = memoize(fibonacci)
console.log(fibonacciMemoized(5))