// Reduce: The reduce method reduces an array of values, down to just one value 
// reduce take two parameters, reduce(callback function, initial value)
// accumulator is basically the result of previous computation
// example : sum of values of an array

const numbers = [1, 2, 3, 4, 5]

const sum = numbers.reduce((accumulator, currentValue, index, array) => {
    return accumulator + currentValue;
}, 0)

console.log(sum)