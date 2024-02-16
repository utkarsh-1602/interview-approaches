// title : polyfill for map 
// So we are creating polyfill for map, so it should contain these parameters: map(current element, index, array)

// This prototype property is an object that serves as a template for creating new objects using that function as a constructor. 
Array.prototype.myMap = function(cb){
    // cb is our callback function

    let temp = [];
    for(let i=0; i < this.length; i++){
        temp.push(cb(this[i], i, this));  
    }

    return temp; 
}


const nums = [1,2,3,4];
const multiplyByThree = nums.myMap((num, i, arr) => {
    return num * 3;
})

console.log(multiplyByThree)