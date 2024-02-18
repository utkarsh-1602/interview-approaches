# Objects in Javascript 
In JavaScript, an object is a data type that represents a collection of key-value pairs. It is one of the most fundamental data structures in the language and is used to store various types of data and organize code. Objects can be created using object literals, constructors, or classes.

- Example, 

        const person = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        email: "john@example.com",
        greet: function() {
            console.log("Hello, my name is " + this.firstName + " " + this.lastName);
        }
        };


## Computed Properties
Computed properties in JavaScript allow you to define object properties dynamically using a function. They are defined using square brackets [] around the property name, and inside the brackets, you put an expression that will be evaluated to determine the property name.

        const property = "utkarsh"
        const name = "x" 

        const user = {
            [property]: name
        }

        console.log(user); // utkarsh x


## Object Referencing 
In JavaScript, object referencing is a concept that deals with how variables pointing to objects behave when assigned to other variables or passed as arguments to functions. Unlike primitive types like numbers or strings, objects are reference types. When you assign an object to a variable or pass it to a function, you're actually passing a reference to the object, not a copy of the object itself.

        // Creating an object
        let obj1 = { name: "John", age: 30 };

        // Assigning obj1 to obj2
        let obj2 = obj1;

        // Modifying obj2
        obj2.age = 35;

        // Checking obj1
        console.log(obj1.age); // Output: 35

        // Changing obj1
        obj1.name = "Jane";

        // Checking obj2
        console.log(obj2.name); // Output: Jane


- Also look at example [Q11](interviewQuestions/Q11.js)