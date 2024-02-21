// In this updated example, the "getDetails" method is defined using a regular function expression instead of an arrow function.
// Regular function expressions in JavaScript do have their own "this" context, and the value of "this" inside them is determined by how the function is called.
// When "getDetails" is invoked as a method of the "user" object (as it is in this case), the value of "this" inside "getDetails" refers to the "user" object itself. Therefore, when the inner function "x" is called inside "getDetails", it also captures and inherits the same "this" value from its surrounding lexical context, which is the "user" object.

let user4 = {
    name: "utkarsh",
    age: 21,
    getDetails(){
        const x = () => {
            console.log(this.name)
        }
        x()
    }
}

user4.getDetails()

