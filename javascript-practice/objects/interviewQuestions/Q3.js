// what's the output 

const a = {};
const b = {key: "b"};
const c = {key: "c"};

a[b] = 123;
a[c] = 456;
// a["[object object]"] = 123;
// In JavaScript, when you use an object as a key in another object (as done in a[b] and a[c]), the object is implicitly converted to a string. This conversion typically results in the string "[object Object]". This happens because, when you try to use an object as a property key, it gets converted to its string representation, which is based on its type and memory address. Since both objects b and c are distinct objects, they will both be converted to the same string representation "[object Object]".

console.log(a);
console.log(a[b]);
