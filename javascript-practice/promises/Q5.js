// Using Promise.all

// Question : https://leetcode.com/problems/add-two-promises/?envType=study-plan-v2&envId=30-days-of-javascript
// stackoverflow : https://stackoverflow.com/questions/31700528/combining-two-promises

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(3), 1000); // Resolves to 3 after 1 second
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(5), 2000); // Resolves to 5 after 2 seconds
});


var addTwoPromises = async function(promise1, promise2) {
    var v;
    await Promise.all([promise1, promise2]).then((values) => {
        v = values[0] + values[1]
    })
    return v
};


(async() => {
    
    const result = await addTwoPromises(promise1, promise2);
    console.log(result)
})();