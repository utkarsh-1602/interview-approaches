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


