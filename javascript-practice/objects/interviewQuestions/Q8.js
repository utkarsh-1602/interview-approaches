// what's the output 

const shape = {
    radius : 10,
    diameter(){ 
        return this.radius*2;
    },
    perimeter: () => 2 * Math.PI * this.radius 
    // since arrow functions don't bind this to the object's context like regular functions do, this refers to the outer scope, which is likely the global scope (window object in a browser environment).

}

console.log(shape.diameter())
console.log(shape.perimeter())