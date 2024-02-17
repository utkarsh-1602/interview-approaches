// what's JSON.stringify and JSON.parse ? 

/* 
JSON.stringify:
1. This function is used to convert a JavaScript object into a JSON string.
2. It takes an object as a parameter and returns a JSON string representing that object.

JSON.parse():
This function is used to parse a JSON string and convert it into a JavaScript object.
It takes a JSON string as a parameter and returns a JavaScript object representing the JSON data.

*/

// JSON Stringify
const obj = { name: 'John', age: 30 };
const jsonString = JSON.stringify(obj);
console.log(jsonString); // Output: '{"name":"John","age":30}'


// JSON Parse
const jsonInput = '{"name":"John","age":30}';
const parsedObject = JSON.parse(jsonInput);
console.log(parsedObject); // Output: { name: 'John', age: 30 }
