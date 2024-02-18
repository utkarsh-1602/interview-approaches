// cloning an object
// method 1 : destructuring with spread operator

let user = {
    name: "utkarsh",
    age: 21
}

const objClone = {...user}
objClone.name = "sam"

console.log(objClone)
console.log(user)