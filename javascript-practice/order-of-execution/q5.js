console.log('start');
const myProm = new Promise(function (resolve, reject) {
    console.log('running');
    resolve();
});
myProm.then(() => console.log('resolved'));
console.log('end of main block');
