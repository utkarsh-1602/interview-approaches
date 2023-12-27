## NodeJS Architecture

- Resource : https://www.simplilearn.com/understanding-node-js-architecture-article 


## Node.js Server Architecture 
- Node.js uses the “Single Threaded Event Loop” architecture to handle multiple concurrent clients. Node.js Processing Model is based on the JavaScript event-based model along with the JavaScript callback mechanism.


## Parts of the Node.js Architecture
1. Requests: Incoming requests can be blocking (complex) or non-blocking (simple), depending upon the tasks that a user wants to perform in a web application
2. Node.js Server: Node.js server is a server-side platform that takes requests from users, processes those requests, and returns responses to the corresponding users
3. Event Queue: Event Queue in a Node.js server stores incoming client requests and passes those requests one-by-one into the Event Loop
4. Thread Pool: Thread pool consists of all the threads available for carrying out some tasks that might be required to fulfill client requests
5. Event Loop: Event Loop indefinitely receives requests and processes them, and then returns the responses to corresponding clients
6. External Resources: External resources are required to deal with blocking client requests. These resources can be for computation, data storage, etc.

## Workflow of Node.js Architecture
- Clients send requests to the webserver to interact with the web application. Requests can be non-blocking or blocking:
    1. Querying for data
    2. Deleting data 
    3. Updating the data

- Node.js retrieves the incoming requests and adds those requests to the Event Queue.
- The requests are then passed one-by-one through the Event Loop. It checks if the requests are simple enough to not require any external resources
- Event Loop processes simple requests (non-blocking operations), such as I/O Polling, and returns the responses to the corresponding clients
- A single thread from the Thread Pool is assigned to a single complex request. This thread is responsible for completing a particular blocking request by accessing the external resources, such as compute, database, file system, etc.
- Once, the task is carried out completely, the response is sent to the Event Loop that in turn sends that response back to the Client

