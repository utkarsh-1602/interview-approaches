console.log('A');

setTimeout(function () {
    console.log('B');
}, 0);

Promise.resolve().then(function () {
    console.log('C');
});

console.log('D');
