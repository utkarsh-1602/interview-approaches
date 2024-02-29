# useCallback() hook 
- `useCallback` is a hook provided by React that is used for memoizing functions. In React, when a component re-renders, any functions defined inside that component are recreated. This can lead to performance issues, especially when passing these functions down to child components that rely on reference equality for optimization, such as React.memo or useMemo.

- `useCallback()` allows you to memoize a function so that it's only recreated when its dependencies change. This can help optimize performance by preventing unnecessary re-renders caused by creating new function references on every render.

```javascript
const cachedFn = useCallback(fn, dependencies)
```

**It takes two parameters:**
1. `fn`: The function value that you want to cache. It can take any arguments and return any values. React will return (not call!) your function back to you during the initial render. On next renders, React will give you the same function again if the dependencies have not changed since the last render. Otherwise, it will give you the function that you have passed during the current render, and store it in case it can be reused later. React will not call your function. The function is returned to you so you can decide when and whether to call it.

2. `dependencies`: The list of all reactive values referenced inside of the fn code. Reactive values include props, state, and all the variables and functions declared directly inside your component body.The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison algorithm.


**Returns**: 
- On the initial render, useCallback returns the fn function you have passed.
- During subsequent renders, it will either return an already stored fn  function from the last render (if the dependencies haven’t changed), or return the fn function you have passed during this render.


### if on initial render, the usecallback() is called and I stored the function, then on next render, If I called another function (dependencies changes) so then my previous function call will be saved in dependency array [] or it would be removed from the array to save the current dependency ? 

When you call useCallback with a new function or when the dependencies change, React will update the memoized function with the new one and include the new dependencies in the dependency array. The previous function call will not be saved in the dependency array. Instead, the new function and its dependencies will be used for memoization.

