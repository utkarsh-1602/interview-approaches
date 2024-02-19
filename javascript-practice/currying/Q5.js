// implement Partial application

function sum(a){
    return function(b,c){
        return a+b+c;
    }
}

const x = sum(10);
console.log(x(1,2))