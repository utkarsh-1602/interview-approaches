
const age = 10;

const person1 = {
    name: 'utkarsh',
    age: 21, 
    getAge: function(){
        return this.age; 
    }
}

const person2 = {
    age: 24
}

console.log(person1.getAge.call(person2))
console.log(person1.getAge.apply(person2))
console.log(person1.getAge.bind(person2)()) // we know that, bind is returning a function here, so to call that function we invoke it with () 
