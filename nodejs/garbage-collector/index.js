
const express = require('express');
const app = express();
const port = 3000;

let allocatedMemory = []; // To simulate dynamic memory allocation


// The /allocate endpoint simulates the allocation of memory by pushing a large array into the allocatedMemory array.

app.get('/allocate', (req, res) => {
  // Allocate some memory dynamically
  allocatedMemory.push(new Array(1000000).fill('x'));

  res.send('Memory allocated successfully!');
});

// The /release endpoint simulates the release of memory by setting allocatedMemory to an empty array.


app.get('/release', (req, res) => {
  // Release the allocated memory
  allocatedMemory = [];

  res.send('Memory released successfully!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Enable garbage collection logs
if (process.env.NODE_ENV !== 'production') {
  setInterval(() => {
    global.gc();
    // We've added a garbage collection interval that calls global.gc() every second and logs a message
    // The global.gc() function is only available if you start Node.js with the --expose-gc flag
    console.log('Garbage collection performed');
  }, 1000);
}
