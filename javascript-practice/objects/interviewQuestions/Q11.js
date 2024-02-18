// what's the output 

let c = {greeting: "hey!"};
let d;

d = c; // object referencing 
// we are not copying the properties of c to d, we are providing a reference to c for d, so if c changes, then d will also change.
c.greeting = "Hello";
console.log(d.greeting)