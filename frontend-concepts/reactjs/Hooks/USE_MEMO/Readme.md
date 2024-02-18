# useMemo() hook 
The `useMemo` hook is a built-in hook in React that is used for memoization. **Memoization** is an optimization technique used to improve the performance of functions by caching the results of expensive function calls and reusing them when the same inputs occur again.

In React, useMemo memoizes the result of a function so that the function is not re-executed on every render unless its dependencies change. This can be useful for avoiding unnecessary calculations or expensive computations in functional components.

The basic syntax of useMemo is as follows:
```javascript
const cachedValue = useMemo(functionToCalculateValue, [dependencies])
```
- The function calculating the value that you want to cache. It should be pure, should take no arguments, and should return a value of any type. React will call your function during the initial render. On next renders, React will return the same value again if the dependencies have not changed since the last render. Otherwise, it will call calculateValue, return its result, and store it so it can be reused later.

- The second argument is an array of dependencies. The memoized value will only be recalculated when one of these dependencies changes.The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3].

### on Return
- **On the initial render**, useMemo returns the result of calling calculateValue with no arguments.
- **During next renders**, it will either return an already stored value from the last render (if the dependencies haven’t changed), or call calculateValue again, and return the result that calculateValue has returned.



