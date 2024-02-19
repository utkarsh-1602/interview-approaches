# Closures
- In JavaScript, a closure is a function that has access to its own scope, as well as the outer (enclosing) scope in which it was defined. This means that a closure can access variables and parameters from its outer scope even after that scope has exited.
- for example, 

        (function(x){
            return (function(y){
                console.log(x)
            })(2);
        })(1);

- The outer function (function(x) { ... })(1) is immediately invoked with the argument 1. This creates a closure where x is 1.
- Inside the outer function, an inner function is defined (function(y) { ... }).
- The inner function is immediately invoked with the argument 2. Inside this inner function, it logs the value of x, which is 1.
- Even though the outer function has already executed and exited, the inner function still has access to the variable x from its outer scope, thanks to the closure mechanism.

## Closure Scope chain 
- The "scope chain" refers to how JavaScript looks for variables when the code is executed. When you try to access a variable in JavaScript, it first checks the local scope (inside the current function). If the variable is not found there, it looks in the outer function's scope, and if it's still not found, it keeps going up the chain until it reaches the global scope.

- So, the "closure scope chain" is the path that JavaScript follows to find variables when you're inside a nested function, going from the inner function's scope to the outer function's scope and eventually to the global scope.

## Private Counter 
- In JavaScript, a private counter refers to a variable or property that is accessible only within a specific scope or closure and cannot be directly accessed or modified from outside that scope.
- In JavaScript, prefixing a variable or function name with an underscore(`_`), such as `_counter`, is a convention used to indicate that it's intended to be private or internal to the module, class, or scope where it's defined
- checkout this example: [Q9](Q9.js)