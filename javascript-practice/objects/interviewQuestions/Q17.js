// cloning an object
// method 1 : JSON.parse(JSON.stringify(object))

let user = {
    name: "utkarsh",
    age: 21
}

const objClone = JSON.parse(JSON.stringify(user));
objClone.name = "sam"

console.log(objClone)
console.log(user)