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
