console.log("0");
new Promise((resolve, reject) => {
    console.log("1");
    resolve();
}).then(() => {
    console.log("2");
});
console.log("3");