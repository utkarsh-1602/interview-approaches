// what will be the output 

var user = {
    name : "utkarsh"
}

function myFun(age, location){
    return `Hello ${this.name}, is ${age} from ${location} ?`;
}

console.log(myFun.call(user, 21, 'india'))
console.log(myFun.bind(user, 21, 'india'))