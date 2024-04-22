const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

// Function to simulate asynchronous task
async function asyncTask() {
  console.log('Start of async task');
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating asynchronous operation
  console.log('End of async task');
}

// Function to simulate synchronous task
function syncTask(taskNumber) {
  console.log(`Start of sync task ${taskNumber}`);
  // Simulating synchronous operation
  console.log(`End of sync task ${taskNumber}`);
}

// Async function to run main logic
async function main() {
  // Start the asynchronous task
  await asyncTask();

  // Run synchronous tasks using worker threads
  const workerPromises = [];
  for (let i = 0; i < 5; i++) {
    workerPromises.push(new Promise((resolve, reject) => {
      const worker = new Worker(__filename, { workerData: { taskNumber: i } });
      worker.on('message', message => {
        console.log(message);
        resolve();
      });
      worker.on('error', reject);
    }));
  }

  // Wait for all worker threads to complete
  await Promise.all(workerPromises);
}

// Run main logic if this is the main thread
if (isMainThread) {
  main().catch(err => console.error(err));
} else {
  // Execute synchronous task in worker thread
  const { taskNumber } = workerData;
  syncTask(taskNumber);
  // Notify main thread that task is complete
  parentPort.postMessage(`Completed sync task ${taskNumber}`);
}
