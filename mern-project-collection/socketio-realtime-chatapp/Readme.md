# Socket.io 

- Socket.IO is a JavaScript library that empowers developers to create real-time, bidirectional communication channels between web clients and servers. Its core strengths lie in enabling instant updates, eliminating the need for frequent page reloads, and fostering highly interactive and engaging user experiences.
- Deliver data to clients almost instantly as changes occur on the server, fostering dynamic and up-to-date web applications. This is crucial for applications like chat rooms, collaborative editing tools, live dashboards, and more.
- Bidirectional communication: Both clients and servers can initiate and receive data, establishing a more engaging and responsive communication flow. This allows for features like chat, notifications, and real-time feedback.
- When possible, Socket.IO utilizes WebSockets, which offer efficient, full-duplex communication with low overhead.
-  If your application requires data to be reflected on clients immediately, Socket.IO is a strong choice.

### Emitting Events 
- Let’s make it so that when the user types in a message, the server gets it as a chat message event
The main idea behind Socket.IO is that you can send and receive any events you want, with any data you want. Any objects that can be encoded as JSON will do, and binary data is supported too.

### Broadcasting in SocketIo 
In Socket.IO, broadcasting refers to the mechanism of emitting messages from the server to all connected clients, or to a subset of clients, rather than just to the client that initiated the communication.
- In order to send an event to everyone, Socket.IO gives us the `io.emit()` method.

        // this will emit the event to all connected sockets
        io.emit('hello', 'world'); 

- If you want to send a message to everyone except for a certain emitting socket, we have the broadcast flag for emitting from that socket:

        io.on('connection', (socket) => {
        socket.broadcast.emit('hi');
        });


### synchronize the state of the client upon reconnection.
There are two common ways to synchronize the state of the client upon reconnection:

1. either the server sends the whole state
2. or the client keeps track of the last event it has processed and the server sends the missing pieces


# Queries Arised When Building the application 

### If index.html is in the same directory, why am I passing __dirname, instead of __filename ? 
- Since index.html is in the same directory as the script containing the app.get() route, using __dirname ensures that the correct path to index.html is constructed regardless of the script's current location within the file system.
- If you were to use __filename instead, it would give you the full path to the script file itself, not the directory containing it. Therefore, __dirname is the appropriate choice for constructing the path to index.html in this context.


### Do I have to setup SQLite globally ? 
- SQLite is a serverless, self-contained database engine that stores data in a single file.
- SQLite does not require a separate server process to run. Instead, it directly reads and writes to the database file on disk. This makes it very convenient for embedding in applications, as you don't need to install and configure a separate database server. 

                const db = await open({
                filename: 'chat.db',
                driver: sqlite3.Database
                });

- The code snippet you provided is using SQLite, which is a local SQL database.
- When you execute the code you've shown, it will attempt to open a SQLite database file named 'chat.db' in the current directory.
- If the 'chat.db' file does not exist at the specified location, SQLite will create it automatically when you attempt to open it using the open function from the sqlite package. **Therefore, you do not need to have SQLite installed globally on your system**.
- The sqlite package you're using is a Node.js wrapper around the SQLite C library, allowing you to interact with SQLite databases directly from Node.js without needing a separate SQLite installation.







