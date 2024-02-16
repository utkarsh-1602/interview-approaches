# Functions in Javascript 

### Function Expression
In JavaScript, a function expression is a way to define a function as part of an expression, usually by assigning it to a variable.

        // Function expression
        var add = function(a, b) {
            return a + b;
        };


### First class functions
A programming language is said to have First-class functions if functions in that language are treated like other variables.

        function square(num){
            return num*num;
        }

        function displaySquare(fn){
            console.log("Square is " + fn(5));
        }

        displaySquare(square);

### IIFE (Immediately Invoked Function Expression)
IIFE stands for Immediately Invoked Function Expression in JavaScript. It's a design pattern used to encapsulate code within a function scope and execute it immediately after its definition. This helps in preventing polluting the global namespace and creates a closure around the code, keeping the variables within the function private to that scope.

- example 1:

        (function square(num){
            console.log(num * num);
        })(5);


- example 2:

        (function(x){
            return (function(y){
                console.log(x)
            }).(2);
        })(1);
        
        // output : 1 


