var user = {
    name : "utkarsh"
}

function myFun(job, location){
    console.log(`Hello ${this.name}, are you ${job} in ${location} ?`)
}

// myFun()
// so if we invoke like this, it will print undefined, because this is pointing to global object (window object) not user object

// myFun.call(user)
// now we are giving specifically user object, now this is pointing to user object.


// to pass parameters in a function, we can pass it in call()
myFun.call(user, 'developer', 'india')