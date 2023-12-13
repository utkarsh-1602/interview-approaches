// Closures are a powerful and often-used concept in JavaScript. A closure is created when a function is defined inside another function, allowing the inner function to access the outer function's variables and parameters even after the outer function has finished executing

function outerFunction() {
    let outerVariable = 'I am from outer function';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

let closure = outerFunction();
closure();


function counterFactory() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = counterFactory();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
