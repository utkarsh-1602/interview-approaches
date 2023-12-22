function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { result: 'some data' };
            resolve(data);
        }, 1000);
    });
}

// .then() a way to specify a callback function that will be executed when the promise is fulfilled (i.e., when the asynchronous operation completes successfully).

fetchData()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
