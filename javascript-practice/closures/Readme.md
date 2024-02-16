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
