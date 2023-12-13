// A callback is a function that is passed as an argument to another function and is executed after the completion of a task, often an asynchronous one
function fetchData(callback) {
    setTimeout(function () {
        console.log('Data fetched successfully');
        callback();
    }, 1000);
}

function processData() {
    console.log('Data processed');
}

fetchData(processData);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

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

