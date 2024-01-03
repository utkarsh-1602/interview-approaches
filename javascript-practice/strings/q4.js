// Write a function that removes duplicates from an array

let arr1 = [1, 3, 2, 6, 5, 3, 1];

function removeDuplicates(arr){
    console.log([... new Set(arr)])
}

removeDuplicates(arr1)