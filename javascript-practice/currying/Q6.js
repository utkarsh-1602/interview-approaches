// Convert f(a,b,c) into f(a)(b)(c)

function curry(funct){
    return function curriedFunction(...args){
        if(args.length >= funct.length){
            return funct(...args)
        }
        else{
            return function(...next){ 
                // return function(...next): If the number of arguments is insufficient, it returns another function that can accept additional arguments.
                return curriedFunction(...args, ...next)
                // return curriedFunction(...args, ...next): This recursively calls the curriedFunction with the current arguments (...args) along with any additional arguments passed (...next).

            }
        }
    }
}

const sum = (a, b, c, d) => a + b + c + d;

const totalSum = curry(sum);

console.log(totalSum(1)(2)(3)(4))