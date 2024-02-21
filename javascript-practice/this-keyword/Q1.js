 // this is pointing to user object

let user1 = {
    name: "utkarsh",
    age: 21,
    getDetails() {
        console.log(this)
    }
}

user1.getDetails()