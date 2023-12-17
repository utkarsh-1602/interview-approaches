console.log('start');

setTimeout(function () {
    console.log('timeout callback');
}, 0);

Promise.resolve().then(function () {
    console.log('promise resolve');
});

console.log('end');
