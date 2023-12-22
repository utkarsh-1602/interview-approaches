function stepOne() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Step One Completed');
            resolve('Result from Step One');
        }, 1000);
    });
}

function stepTwo(previousResult) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Step Two Completed');
            resolve(`Result from Step Two using ${previousResult}`);
        }, 1000);
    });
}


stepOne().then((result) => stepTwo(result))
    .then((finalResult) => {
        console.log('Final Result:', finalResult);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
