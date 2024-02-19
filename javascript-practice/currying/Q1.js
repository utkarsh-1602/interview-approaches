// Implement currying 


// Original function with multiple arguments
function add(x, y) {
    return x + y;
}

// Curried version of the add function
function curriedAdd(x){
    return function(y){
        return x + y;
    }
}

// Usage of curried function
const new1 = curriedAdd(5); // Partial application of the first argument
console.log(new1(3)); // Outputs: 8

// or we can also do 
const new2 = curriedAdd(5)(3);
console.log(new2)