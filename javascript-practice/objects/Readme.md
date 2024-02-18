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

- In JavaScript, when comparing objects, the comparison is based on reference rather than the contents of the objects. This means that two objects are considered equal only if they reference the same memory location, regardless of whether their property names and values are identical. If two objects with identical property names and values are created separately, they will occupy different memory locations, leading to a comparison result of false. check this example [Q12](interviewQuestions/Q12.js)
- In JavaScript, assigning null to a variable only removes the reference to an object; it doesn't delete the object itself. The object will be removed by the garbage collector once there are no more references to it.
- checkout examples 
[Q13](interviewQuestions/Q13.js)
[Q14](interviewQuestions/Q14.js)
[Q15](interviewQuestions/Q15.js)

## Clone an Object
In JavaScript, when you create a copy of an object, there are two common approaches: shallow copy and deep copy. These approaches differ in how they handle nested objects or arrays within the original object.

### Shallow copy 
- A shallow copy creates a new object, but it only copies the references to the nested objects or arrays within the original object. In other words, it does not create copies of the nested objects themselves.
- If the original object contains nested objects or arrays, the shallow copy will still reference the same nested objects or arrays as the original object.
- Shallow copying is simpler and faster, but it can lead to unexpected behavior if you modify nested objects or arrays in one copy and expect the changes not to affect the other copy.

### Deep copy 
- A deep copy creates a new object and recursively copies all nested objects and arrays within the original object. This means that each nested object or array is also duplicated, ensuring that the copy is entirely independent of the original.
- Deep copying ensures that changes made to the copy do not affect the original object, and vice versa, as they are entirely separate instances.
- Deep copying is more complex and may be slower, especially for deeply nested objects or arrays, but it provides a complete and independent copy of the original data structure.

<hr>

### Here's a simplified analogy:

- **Shallow copy** is like making a photocopy of a book's table of contents without duplicating the content of each chapter. You still have references to the original pages.
- **Deep copy** is like making a photocopy of the entire book, including all chapters and sub-chapters. You have a completely separate copy.
