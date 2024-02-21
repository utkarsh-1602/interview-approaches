// the "getDetails" method is defined using an arrow function

// Arrow functions in JavaScript do not bind their own "this" value but instead inherit the "this" value from the enclosing lexical context (i.e., the context in which they are defined).

// In this case, the "getDetails" method is defined within the "user" object, but because it's an arrow function, it doesn't have its own "this" context and thus doesn't have access to the "user" object. Instead, it captures the "this" value from its surrounding scope, which in this case is likely the global scope (window object in a browser or global object in Node.js).

// So, when "getDetails" is called, the value of "this" inside the arrow function remains empty or undefined because it's not bound to any specific object.

let user = {
    name: "utkarsh",
    age: 21,
    getDetails: () => {
        console.log(this)
    }
}

user.getDetails()

