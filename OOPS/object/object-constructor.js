// example 1 
function person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}

// creating new instance of person object 
let person1 = new person('Utkarsh', 'Hadgekar')
let person2 = new person('John', 'Cena')

console.log(person1.first_name)
console.log(`${person2.first_name} ${person2.last_name}`)


// example 2 

function Laptop(laptop_name, laptop_price) {
    this.name = laptop_name;
    this.price = laptop_price;
}

let laptop1 = new Laptop("Legion 5i", 70000)
let laptop2 = new Laptop("HP Pavilion", 50000)

console.log(laptop1)
console.log(laptop2)