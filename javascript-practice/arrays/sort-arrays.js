let array1 = [10, 23, 2, 1, 0, 9]
console.log(array1.sort())

// The Array.prototype.sort() method sorts the elements of an array in place and returns the sorted array. However, when you don't provide a compare function to sort(), it converts the elements to strings and performs a lexicographic (dictionary) sort.
//  elements in array1 are numbers, but when the sort() method compares them as strings, the result may not be what you expect. For example, with the default string comparison, the number 10 comes before 2 because the string '10' comes before '2' in lexicographic order.


let array2 = [10, 23, 2, 1, 0, 9]
console.log(array2.sort((a, b) => a - b))

// The compare function (a, b) => a - b takes two elements a and b. The subtraction a - b is used as the basis for the comparison. If the result is negative, a is sorted before b; if the result is positive, b is sorted before a. If the result is zero, the order remains unchanged.
// The sorted array is then logged to the console using console.log().


let array3 = [10, 23, 2, 1, 0, 9]
let sortedArray = [...array3].sort((a, b) => a - b)
console.log("Sorted array: " + sortedArray)

// Using the spread operator to create a new array before sorting is a common approach to avoid side effects on the original array.






