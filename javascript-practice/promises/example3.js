// Using Promise.all

// Question : https://leetcode.com/problems/add-two-promises/?envType=study-plan-v2&envId=30-days-of-javascript
// stackoverflow : https://stackoverflow.com/questions/31700528/combining-two-promises

var addTwoPromises = async function(promise1, promise2) {
    var v;
    await Promise.all([promise1, promise2]).then((values) => {
        v = values[0] + values[1]
    })
    return v
};

