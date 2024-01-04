const add5 = (x) => x + 5;
const multiplyBy3 = (x) => x * 3;
const subtract10 = (x) => x - 10;

// The compose function iterates through the array of functions in reverse order and applies each function to the result of the previous one. The result is a new function that applies the entire composition of functions to an input value.
const compose = (...functions) => {
    return (input) => {
     // The reduceRight method is used to iteratively apply each function to the accumulated result, starting from the rightmost function.
      return functions.reduceRight((acc, fn) => {
        return fn(acc);
      }, input);
    };
  };  

const composedFunction = compose(subtract10, multiplyBy3, add5);
const result = composedFunction(7);

console.log(result); 
