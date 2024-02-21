# Constructors in Javascript

- In JavaScript, a constructor is a special type of method that is automatically called when an instance of a class is created. 
- Constructors are primarily used for initializing object properties.

Here's a basic example of a constructor in JavaScript using ES6 class syntax:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Creating an instance of the Person class
const person1 = new Person('John', 30);

console.log(person1.name); // Output: John
console.log(person1.age); // Output: 30

```