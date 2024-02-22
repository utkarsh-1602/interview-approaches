
var user = {
    name : "utkarsh"
}

function myFun(job, location){
    console.log(`Hello ${this.name}, are you a ${job} in ${location} ?`)
}

myFun.apply(user, ['developer', 'india'])