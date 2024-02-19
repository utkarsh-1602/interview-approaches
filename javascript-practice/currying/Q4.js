/*
    Implement:
    evaluate("sum")(4)(2) = 6
    evaluate("multiply")(4)(2) = 8
    evaluate("divide")(4)(2) = 2 
    evaluate("substract")(4)(2) = 2
*/

function evaluation(operation){
    
    return function(a){
        return function(b){
            if(operation == "sum") return a+b;
            else if(operation == "multiply") return a*b;
            else if(operation == "divide") return a/b;
            else if(operation == "substract") return a-b;
            else return "Invalid operation : " + operation;
        }
    }
}

console.log(evaluation("sum")(4)(2))
console.log(evaluation("multiply")(4)(2))
console.log(evaluation("divide")(4)(2))
console.log(evaluation("substract")(4)(2))