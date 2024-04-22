// implement sum(2)(6)(1)

function mySum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(mySum(2)(6)(1))