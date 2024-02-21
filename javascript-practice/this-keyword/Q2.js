// here this is pointing to childObj, so if we try to print the object value outside the childObj, then it will be returned undefined

let user = {
    name: "utkarsh",
    age: 21,
    childObj : {
        newName: "ronnie",
        getDetails() {
            console.log(this.newName + " " + this.name)
        }
    }
}

user.childObj.getDetails()