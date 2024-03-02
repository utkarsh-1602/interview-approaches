# MYSQL Queries
This section is divided into two parts. 
- First part is basics, where you can find basic SQL queries to practice. 
- second part is Real-world-scenarios, where I've put the SQL queries that are practicized for real-world projects. 

# SQL Imp Interview Questions 

## What is SQL ? Why do we use it ? 
- SQL (Structured Query Language) is a programming language used for managing and manipulating relational databases. 
- It provides a way to interact with databases, so that users can perform various operations such as querying data, inserting new records, updating existing records, and deleting records.
- We use SQL for various purposes, such as Data Querying, Data Management, Data Manipulation, Database Security, Data aggregation, and interacting with applications. 

## What are different types of SQL Commands ? 
SQL commands can be broadly categorized into several types based on their functionality, these are some main types: 

1. DQL (Data Query Language): DQL comprises SQL commands used to retrieve specific data from one or more tables in a database.
    - SELECT 

2. DDL (Data Definition Language): DDL comprises of SQL commands used to define, modify, and remove database objects such as tables, indexes, views, and schemas.

    - CREATE
    - ALTER
    - DROP

3. DML (Data Manipulation Language): DML consists of SQL commands used to manipulate data within database objects, such as inserting new records, updating existing records, and deleting records.

    - INSERT
    - UPDATE
    - DELETE

There are several common types and their commands, there are other commands as well that are used widely. 

## What are Constraints in SQL ?
Constraints in SQL are rules or conditions that are enforced on data within a database table. They help maintain the integrity, accuracy, and consistency of the data.

Here are the common types of constraints in SQL:

1. Primary Key Constraint: Think of it as a special ID card for each row in a table. It makes sure that each row has a unique ID, and this ID cannot be empty.

2. Foreign Key Constraint:  It's like having a connection between two tables. It ensures that a value in one table matches a value in another table.

3. Unique Constraint: Imagine each value in a certain column is like a fingerprint; it must be different from all others. This constraint ensures that each value in the specified column is unique, except if it's blank.

4. Check constraint:  like setting up a rule for what's allowed in a particular column. You can say things like "only accept ages above 18" or "only allow letters in this field". It checks that every row meets these rules.

5. Not Null Constraint: This is like saying "This column can't be empty". It ensures that whenever you add or update a row, you have to provide a value for this column; it can't be left blank.