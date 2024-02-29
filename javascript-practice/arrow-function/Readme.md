# Arrow Function 
Arrow functions was introduced in ES6. And it introduced a simple and shorter way to create functions.

# What is the difference between arrow function and normal function ? 

1. Arguments 
- A normal function has an `arguments` object which you can access in the function.
```javascript
function print() {
  console.log(arguments)
}

```

- there is No `arguments` object in arrow function.

2. `this` binding 
- In normal function, this keyword references the objects that call them.

