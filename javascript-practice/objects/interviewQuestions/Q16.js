// cloning an object
// method 1 : Object.assign()

let user = {
    name: "utkarsh",
    age: 21
}

const objClone = Object.assign({}, user)
objClone.name = "sam"

console.log(objClone)
console.log(user)