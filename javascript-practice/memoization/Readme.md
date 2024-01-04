# Memoization 
Memoization is a powerful optimization technique used in computer programming to speed up the execution of functions by caching their results. It is particularly useful when dealing with computationally expensive or frequently called functions. JavaScript, being a dynamic and flexible language, provides various ways to implement memoization.

memoization involves storing the results of expensive function calls and returning the cached result when the same inputs occur again.

### The basic idea behind memoization can be summarized in three steps:
1. Check if the result for a given set of inputs is already cached.
2. If the result is found, return it.
3. Otherwise, compute the result, cache it, and return it.

### Reference : https://designtechworld.medium.com/memoization-in-javascript-282d5fad29c8