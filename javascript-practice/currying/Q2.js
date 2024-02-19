
function myMultiply(a){
    return function(b){
        return a*b;
    }
}

const x = myMultiply(2)(2);
console.log(x)