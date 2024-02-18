// what's the output 

function getItems(fruitList, favoriteFruit, ...args){ // rest parameter should be at last of parameters
    return [...fruitList, ...args, favoriteFruit]
}

console.log(getItems(["banana", "apple"], "pear", "orange"));