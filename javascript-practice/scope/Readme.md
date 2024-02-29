# Scope 
Scope determines the accessibility of variables, objects, and functions from different parts of the code withhin a certain region. 

### Global Scope 
- Variables declared outside of any function or block have global scope. They can be accessed from anywhere within the script.
- Variables declared with var in the global scope are attached to the global object (window in browsers, global in Node.js).


### Function Scope 
- Variables declared inside a function have function scope. They can only be accessed within that function.
`var` has function scope, meaning variables are accessible throughout the function they are declared in. If declared outside a function, they are globally scoped.


### Block scope 
- Variables declared inside a block (curly braces, loops or conditions) have block scope. They can only be accessed within that block. 
`let` and `const` have block scope, meaning variables are accessible only within the block they are declared in.

## Lexical Scope 
Lexical scope is a fundamental concept in programming that determines the accessibility of variables and functions within a program.

## Declaration 
- `let` and `const` cannot be redeclared in the same scope. 

        let a;
        let a;
        // this will throw an error

        const b;
        const b;
        // this will throw an error

- `var` can be redeclared in the same scope.

        var x;
        var x;
        var x;
        // you can redeclare as many times you want.
        // it won't throw an error 
