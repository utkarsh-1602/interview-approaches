# Hoisting 
-  Hoisting is a concept where a variable or function is lifted to the top of its global or local scope before the whole code is executed. This makes it possible for such a variable/function to be accessed before initialization.

### Function Hoisting 

**function hoisting** means that when JavaScript code is being compiled, function declarations are recognized and stored in memory even before the code is executed. This allows you to call a function before it's actually defined in the code without causing an error. Essentially, JavaScript moves all function declarations to the top of the current scope during the compilation phase, so you can use them anywhere within that scope, regardless of where they are declared in the code.


        console.log(greeting()); // "Hello there!"
 
        function greeting() {
        return "Hello there!";
        }


### Variable hoisting with var

- In JavaScript, when you declare a variable globally using var, it becomes a property of the global object (window in browsers).
- When a variable is declared with the var keyword, the JavaScript interpreter still hoists its declaration.
- for example, When the variable a is hoisted, the JavaScript engine still moves it to the top of its scope – but it initializes the variable with a value of `undefined`. As such, until `a` is actually declared on the next line, its actual value won’t be assigned. Then, after declaration, we can finally log its value to the console: “a“.

        console.log(a); // undefined
 
        var a = "a";
        
        console.log(a); // "a"


### Variable hoisting with let and const 
- In the case of `let` and `const`, unlike `var`, they are not initialized with `undefined` during the hoisting phase. Instead, a <span style="color:red">ReferenceError</span> is thrown if you try to access them before they are declared. This is known as the **Temporal dead zone (TDZ)**.

        console.log(a); // ReferenceError: Cannot access 'a' before initialization
 
        console.log(b); // ReferenceError: b is not defined
        
        let a = "a";
        
        console.log(a); // "a"


- The reason why we see these errors, even though variable a is properly hoisted, is due to the variable being in the **temporal dead zone (TDZ)**. 

- variabl `a` of type let, is hoisted in temporal dead zone. 

That is, while the variable is in scope, we cannot access or use the variable at all before it is explicitly declared. This same behavior also applies when declaring a **class** with the `class` keyword.

### Temporal Dead zone 
- In JavaScript, the "temporal dead zone" refers to a specific behavior related to variables declared with let and const keywords within a block scope. When you declare a variable using let or const, they are hoisted to the top of their block scope (the nearest enclosing {}), but unlike variables declared with var, they are not initialized immediately. Instead, they remain in an uninitialized state until the line of code declaring them is executed.

- During the temporal dead zone, if you try to access the variable before it's initialized, you'll encounter a runtime error. This is because although the variable exists in the scope due to hoisting, it hasn't been assigned a value