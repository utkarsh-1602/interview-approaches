// Given an array containing numbers from 1 to N, with one number missing, find the missing number

let arr1 = [1, 2, 3, 5]

function findMissingNumber(arr) {
    console.log(arr.length)
    const n = arr.length + 1; // expected length 
    console.log(n)

    const sum = (n * (n + 1)) / 2; // Sum of Numbers from 1 to n
    console.log(sum)

    const arrSum = arr.reduce((acc, curr) => acc + curr, 0); // sum of elements in the array 
    console.log(arrSum)

  
    console.log(sum - arrSum)
  }
findMissingNumber(arr1)