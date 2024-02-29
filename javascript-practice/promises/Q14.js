
const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res(10);
    }, 1000)
})

const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res(20);
    }, 500)
})

const promise3 = new Promise((res, rej) => {
    setTimeout(() => {
        res(30);
    }, 2000)
})


const AllPromises = Promise.all([promise1, promise2, promise3]);
AllPromises.then((res) => {
    console.log("Promise Resolved: ", res)
})
.catch((err) => {
    console.log("Promise Rejected: ", err)
})