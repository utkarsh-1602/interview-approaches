// Define a constructor function
function Animal(name) {
    this.name = name;
}

// Add a method to the prototype of Animal
Animal.prototype.sayHello = function() {
    console.log(`Hello, I'm ${this.name}!`);
};

// Create instances of Animal
const cat = new Animal("Whiskers");
const dog = new Animal("Buddy");

// Call the shared method through the prototype
cat.sayHello(); // Output: Hello, I'm Whiskers!
dog.sayHello(); // Output: Hello, I'm Buddy!
