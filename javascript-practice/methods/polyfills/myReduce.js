// title: Polyfill for reduce()
// So we are creating polyfill for reduce, so it should contain these parameters: reduce((accumulator, currentValue, index, array) => {}, initialValue)

Array.prototype.myReduce = function (cb, initialValue){
    var accumulator = initialValue;

    for(let i=0; i<this.length; i++){
        accumulator = accumulator?cb(accumulator, this[i], i, this):this[i];
    }

    return accumulator;
}


const numbers = [1, 2, 3, 4, 5]

const sum = numbers.myReduce((accumulator, currentValue, index, array) => {
    return accumulator + currentValue;
}, 0)

console.log(sum)