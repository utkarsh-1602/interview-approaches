
class user5{
    constructor(n){
        this.name = n; 
    }

    getName(){
        console.log(this.name)
    }
}

const User = new user5("utkarsh");
console.log(User)

// when you call User.getName(), the this keyword inside the getName method refers to the User object, which was created with the constructor function user and has a name property set to "utkarsh". Therefore, calling User.getName() will log "utkarsh" to the console.
