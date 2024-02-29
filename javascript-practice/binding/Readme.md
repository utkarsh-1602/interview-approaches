# Implicit and explicit Binding

- In JavaScript, implicit and explicit binding are concepts related to how the `this` keyword is determined within a function. The value of `this` is not statically defined in JavaScript; rather, it is determined dynamically based on how a function is invoked.

## Implicit Binding 
- Implicit binding occurs when a function is called within an an object, and the this keyword inside that function refers to the that object.
- It is called "implicit" (implied though not directly expressed) because the binding is implicit based on how the function is called.
- This is typically the most common way this is determined in JavaScript.

**example**: 
```javascript
const obj = {
  name: 'John',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

obj.greet(); // Output: Hello, my name is John

```

refer: https://www.youtube.com/watch?v=rv7Q11KWmKU&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&index=7&t=1221s&pp=iAQB


## Explicit Binding 
- Explicit binding occurs when you explicitly specify what the this keyword should refer to using functions like `call`, `apply`, or `bind`.
- This is useful when you want to control the value of this in a function.

**Example of explicit binding**:
```javascript
function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

const person = {
  name: 'Jane'
};

greet.call(person); // Output: Hello, my name is Jane

```

refer: https://youtu.be/VkmUOktYDAU?list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5