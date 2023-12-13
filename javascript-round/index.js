// const ArrayNumbers = (arr) => {

//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             sum += arr[i];
//         }
//     }
//     console.log(sum)

//     const uniqueSet = new Set(arr);
//     const newArr = [...uniqueSet];
//     console.log(newArr)


// }

const numbers = [-1, 2, -4, 2, 7, 9, -6, 2, -1];

const LargestElement = (arr) => {

    if (arr.length === 0) {
        return "Array is empty";
    }

    let largest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(LargestElement(numbers))