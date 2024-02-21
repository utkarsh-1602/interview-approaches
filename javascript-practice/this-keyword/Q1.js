 // this is pointing to user object

let user = {
    name: "utkarsh",
    age: 21,
    getDetails() {
        console.log(this)
    }
}

user.getDetails()