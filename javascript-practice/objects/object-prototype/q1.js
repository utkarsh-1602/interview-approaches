// A constructor function
function TimeLimitedCache() {
    console.log("Hello world!");
    this.car = "lambo"
}

// Adding Methods to the Prototype:

TimeLimitedCache.prototype.set = function(key, value, duration) {
    // Implementation of the set method
    console.log(`My car is ${this.car}`)
};

TimeLimitedCache.prototype.get = function(key) {
    // Implementation of the get method
};

TimeLimitedCache.prototype.count = function() {
    // Implementation of the count method
};


// Creating an instance
const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache)
console.log(timeLimitedCache.set())