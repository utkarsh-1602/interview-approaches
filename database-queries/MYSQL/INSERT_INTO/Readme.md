# INSERT INTO Statement 
Reference: https://www.w3schools.com/sql/sql_insert.asp

The INSERT INTO statement is used to insert new records in a table.

It is possible to write the INSERT INTO statement in two ways:

1. Specify both the column names and the values to be inserted:

        INSERT INTO table_name (column1, column2, column3, ...)
        VALUES (value1, value2, value3, ...);



2.  If you are adding values for all the columns of the table, you do not need to specify the column names in the SQL query. However, make sure the order of the values is in the same order as the columns in the table. Here, the INSERT INTO syntax would be as follows: 

        INSERT INTO table_name
        VALUES (value1, value2, value3, ...);


## CUSTOMERS_TABLE 

| CustomerID | CustomerName       | ContactName     | Address            | City       | PostalCode | Country |
|------------|--------------------|-----------------|--------------------|------------|------------|---------|
| 1          | Company A          | John Doe        | 123 Main Street    | New York   | 10001      | USA     |
| 2          | Company B          | Jane Smith      | 456 Oak Avenue     | Los Angeles| 90001      | USA     |
| 3          | Company C          | Michael Johnson | 789 Elm Drive      | Chicago    | 60601      | USA     |
| 4          | Company D          | Sarah Brown     | 101 Pine Road      | Houston    | 77001      | USA     |


### Q1
For the given table `CUSTOMERS`, Insert a new record into the table. (CustomerID will be updated automatically)

<h4 style="color: goldenrod;">Answer: </h4>

```sql
INSERT INTO CUSTOMERS (CustomerName, ContactName, Address, City, PostalCode, Country) 
VALUES ('Company E', 'Utkarsh Hadgekar', 'Cannought Place, Delhi, India', 'Delhi', 20304, 'INDIA');
```


## Insert Data Only in Specified Columns
It is also possible to only insert data in specific columns.

### Q1
For the given table `CUSTOMERS`, only insert data in the "CustomerName", "City", and "Country" columns. (CustomerID will be updated automatically).

```sql 
INSERT INTO CUSTOMERS (CustomerName, City, Country)
VALUES ('Company F', 'Tokyo', 'JAPAN');
```


## Insert Multiple Rows

- It is also possible to insert multiple rows in one statement.
- To insert multiple rows of data, we use the same INSERT INTO statement, but with multiple values


### Q1
For the given table `CUSTOMERS`, insert 3 rows with the required data into the table.

```sql 
INSERT INTO CUSTOMERS (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES
    ('Company F', 'John Smith', '789 Elm Street', 'Chicago', 60602, 'USA'),
    ('Company G', 'Emma Johnson', '101 Pine Avenue', 'Houston', 77002, 'USA'),
    ('Company H', 'Alice Brown', '456 Maple Road', 'Los Angeles', 90002, 'USA');
```

