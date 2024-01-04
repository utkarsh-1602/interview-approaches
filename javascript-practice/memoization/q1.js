// This is a simple function to find the fibonacci number.
//But This implementation has an exponential time complexity, which means it performs redundant calculations for the same values, leading to inefficient execution.
//  By applying memoization, we can drastically improve the performance of the fibonacci function.

function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  


// One way to implement memoization in JavaScript is by using a cache object to store the computed results.
function fibonacci2(n, cache = {}) {
    if (n <= 1) {
      return n;
    }
    
    if (cache[n]) {
      return cache[n];
    }
    
    const result = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
    cache[n] = result;
    
    return result;
  }
//In this modified version, we introduce an additional parameter cache with a default value of an empty object {}. The cache object serves as a storage for previously computed Fibonacci values. We first check if the result for a given n exists in the cache. If it does, we return the cached result directly. Otherwise, we compute the Fibonacci value as usual, store it in the cache, and return it.

// This approach improves the time complexity of the fibonacci function from exponential to linear, making it much more efficient