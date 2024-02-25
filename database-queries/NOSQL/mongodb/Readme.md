# MongoDB NOSQL Queries

- Install mongodb on your system 
- open your terminal
- Start MongoDB Server : `mongod` 
- Initialize the MongoDB Shell Environment and Connect to MongoDB Instance: `mongosh`

### `mongod` 
The mongod command is the primary daemon process for the MongoDB database. It's responsible for handling data requests, managing data access, and performing various administrative functions within MongoDB.

### `mongosh`
mongosh is the official MongoDB Shell, a command-line interface and JavaScript interpreter for MongoDB. It allows users to interact with MongoDB databases and collections using a JavaScript-based interface.

### Show Databases 
        show dbs

### Add new Database
        use students

### Add new Collection 
To add a new collection in MongoDB using mongosh, you can simply insert a document into it. MongoDB creates collections automatically when you first insert data into them. 

        db.students.insertOne({name: "Utkarsh", rollnumber:21, job:"software developer", city:"aurangabad", country:"india"});


Reference: https://www.w3schools.com/mongodb/index.php