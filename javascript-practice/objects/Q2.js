// delete object property
// accessing objects 
const user = {
    name: 'utkarsh',
    age: 21, 
    "this is a github repo": true,
}

delete user.name;

console.log(user.age);
console.log(user.name); // undefined
console.log(user["this is a github repo"])