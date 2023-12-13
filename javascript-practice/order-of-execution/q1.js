setTimeout(function timeout() {
    console.log('timeout');
}, 0);

let p = new Promise(function (resolve, reject) {
    console.log('create promise');
    resolve();
});

p.then(function () {
    console.log('execute promise');
});

console.log('end');