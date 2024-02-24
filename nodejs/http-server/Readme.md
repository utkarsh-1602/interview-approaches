# HTTP server 

## What is difference between res.end() and res.send()

`res.end()`: res.end() is a method provided by the core Node.js HTTP module. It is used to end the response process and send the specified data to the client. When you call res.end(), it signals that the response is complete and no more data will be sent. If provided, the data parameter will be sent as the response body. If no data is provided, it just ends the response without any additional data.

`res.send()`: res.send() is typically associated with Express.js, which is a popular web framework for Node.js. It is used to send a response with optional data back to the client. res.send() automatically sets the appropriate Content-Type header based on the data provided. It's more versatile than res.end() because it can handle different types of data, such as strings, objects, arrays, or HTML, and automatically sets the appropriate content type.