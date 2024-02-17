# MongoDB Inteview Questions 

### What is MongoDB 
- MongoDB is a document-oriented NoSQL database. It stores data in flexible, JSON-like documents, making it easy to work with.

### What are some Alternatives to MongoDB ?
Some alternatives to MongoDB in the NoSQL realm include:

        Cassandra
        Couchbase
        Redis
        Amazon DynamoDB
        Apache HBase
        CouchDB
        Neo4j
        Elasticsearch
        Microsoft Azure Cosmos DB
        Google Cloud Firestore




### How does MongoDB store Data ? 
- MongoDB stores data in a binary format called BSON (Binary JSON).
- BSON is a binary-encoded serialization of JSON-like documents.
- Each document is composed of key-value pairs where the values can be various data types supported by BSON, including **strings, numbers, dates, arrays, nested documents, binary data, and more**.
- These documents are then organized into collections, which are similar to tables in relational databases.
-  A collection is a grouping of MongoDB documents. Think of a collection as similar to a table in a relational database, where each row represents a document, and each column represents a field within that document
- This flexibility allows for a schema-less or dynamic schema approach, where documents within the same collection can have different sets of fields.
- Collections can contain multiple documents, and MongoDB allows for flexible schema designs within each collection.

### Mongodb is schemaless db, if yes, then how do you create a schema in mongodb ? 
- While MongoDB is often considered schema-less, developers can still enforce a schema by defining a structure for documents using JSON-like schemas called "schemas" or "validation rules" using MongoDB's schema validation feature.

        db.createCollection("users", {
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["name", "age"],
                properties: {
                    name: {
                    bsonType: "string",
                    description: "must be a string and is required"
                    },
                    age: {
                    bsonType: "int",
                    description: "must be an integer and is required"
                    },
                    email: {
                    bsonType: "string",
                    pattern: "^.+@.+$",
                    description: "must be a string and match the regular expression pattern"
                    }
                }
            }
        }
        })

- This example creates a collection called "users" and defines a schema validation rule where each document must have "name" and "age" fields. The "name" field must be a string, and the "age" field must be an integer. Additionally, it allows for an optional "email" field, which must be a string and match the specified regular expression pattern for an email address.

### How mongodb is Different than SQL and better than MYSQL ? 
- MongoDB is a NoSQL database, while SQL and MySQL are relational databases. MongoDB is better suited for handling unstructured or semi-structured data, offers scalability, flexibility, and faster performance for certain types of applications compared to MySQL.
- MongoDB offers more scalability and flexibility through features like sharding, which allows for horizontal scaling, and flexible schema design, enabling easier adaptation to changing data structures compared to MySQL.

### what are different data models in mongodb ?
- In MongoDB, the main data model is the document-oriented model, which stores data in flexible, JSON-like documents.
- Additionally, MongoDB supports other data models like key-value, wide-column, and graph through its various data storage engines and features like GridFS for storing large binary data.

### What is Indexing in MongoDB ? 
- Indexing in MongoDB is a way to optimize query performance by creating an index on a field or a set of fields in a collection. This helps MongoDB quickly locate documents matching a query condition without needing to perform a full collection scan.


- for example, let's say you have a collection of documents representing books, and you frequently need to query books by their title. By creating an index on the "title" field, MongoDB can quickly locate books based on their titles without scanning through all documents in the collection.


        // Create an index on the "title" field
        db.books.createIndex({title: 1})


### How indexing works in MongoDB ?

- In MongoDB, indexing works by creating data structures that store references to documents based on the indexed fields.

- When you query MongoDB with a filter condition that matches an indexed field, MongoDB first checks the index to quickly locate the relevant documents. This process helps MongoDB avoid scanning the entire collection, resulting in faster query execution times.

- MongoDB automatically maintains indexes as documents are inserted, updated, or deleted, ensuring that the index remains up-to-date with the underlying data.


### What is MongoDB Replication ? 

- MongoDB replication is a feature that allows you to create multiple copies of your data across different servers called replica sets.
- In a replica set, one server acts as the primary node, handling all write operations, while the other servers, known as secondary nodes, replicate data from the primary node and can serve read operations.
- Replication provides high availability and fault tolerance by automatically promoting one of the secondary nodes to primary if the current primary fails.
- **Example**, 
consider a real-world scenario of an e-commerce application where high availability and fault tolerance are crucial. 
In this scenario, we'll use MongoDB replication to ensure that the application remains operational even if one of the database servers fails.


        // MongoDB Replica Set Configuration

        // Primary Node
        {
        "_id" : 0,
        "host" : "mongodb-primary:27017"
        }

        // Secondary Node 1
        {
        "_id" : 1,
        "host" : "mongodb-secondary-1:27017"
        }

        // Secondary Node 2
        {
        "_id" : 2,
        "host" : "mongodb-secondary-2:27017"
}

- In this configuration, we have three MongoDB instances:

        mongodb-primary - Acts as the primary node where all write operations are directed.
        mongodb-secondary-1 - Acts as a secondary node that replicates data from the primary node.
        mongodb-secondary-2 - Another secondary node for data replication.

- If the primary node (mongodb-primary) fails, one of the secondary nodes will be automatically elected as the new primary node to ensure uninterrupted write operations.

- Now, let's see how to initialize a replica set using the MongoDB shell: 

        // MongoDB Shell Commands

        // Connect to MongoDB
        mongo --host mongodb-primary

        // Initialize the replica set
        rs.initiate(
        {
            _id: "myReplicaSet",
            members: [
                { _id: 0, host: "mongodb-primary:27017" },
                { _id: 1, host: "mongodb-secondary-1:27017" },
                { _id: 2, host: "mongodb-secondary-2:27017" }
            ]
        }
        )

        // Check the replica set status
        rs.status()

- `rs.initiate()`, Initiates a replica set.
- This code initializes a replica set named myReplicaSet with the specified members. After initialization, you can check the status of the replica set to ensure that all nodes are up and running.
