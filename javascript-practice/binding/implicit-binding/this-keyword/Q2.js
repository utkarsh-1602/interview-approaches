// here this is pointing to childObj, so if we try to print the object value outside the childObj, then it will be returned undefined

let user2 = {
    name: "utkarsh",
    age: 21,
    childObj : {
        newName: "ronnie",
        getDetails() {
            console.log(this.newName + " " + this.name)
        }
    }
}

user2.childObj.getDetails()