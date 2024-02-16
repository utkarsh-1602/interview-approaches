// Map: Transforming each element of an array
// it takes 3 arguments, map(current element, index, array)
const numbers = [1, 2, 3, 4, 5];

const multipleThree = numbers.map((num, i, arr) => {
    return num * 3;
})

console.log(multipleThree)