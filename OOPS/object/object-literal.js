// example 1 
let person = {

    // properties
    name: "utkarsh",
    age: 21,


    // methods
    myMethod: function () {
        return `${this.name} , ${this.age}`
    },

    // object within object 
    phone_number: {
        mobile_number: '12345',
        landline: '09876'
    },

}

console.log(person.myMethod())
console.log(person.phone_number.landline)




// example 2 

let car = {

    driver: "x",
    owner: "y",


    features: {
        speed: "1000mpx",
        capacity: "540Kms",
        engine: "6000Hp"
    },


    myMethod: function () {
        return this.features;
    }

}

console.log("CAR USERS : ", car.owner, car.driver)
console.log("FEATURES: ", car.myMethod())