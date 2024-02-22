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