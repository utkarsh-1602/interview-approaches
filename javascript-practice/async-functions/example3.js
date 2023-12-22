function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sequentialOperations() {
    console.log('Operation 1');
    await delay(1000);
    console.log('Operation 2');
    await delay(1000);
    console.log('Operation 3');
}

// Usage
sequentialOperations();

// Sequential Asynchronous Operations