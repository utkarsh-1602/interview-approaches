function fetchData2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Data fetched successfully');
            resolve();
        }, 1000);
    });
}

function processData2() {
    console.log('Data processed');
}

fetchData2().then(processData2);

