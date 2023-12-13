console.log('start');

setTimeout(function () {
    console.log('timeout callback');
}, 0);

Promise.resolve().then(function () {
    console.log('promise resolve');
    setTimeout(function () {
        console.log('nested timeout');
    }, 0);
});

console.log('end');

// start 
// end 
// promise resolve 
// timeout callback
// neseted timeout 