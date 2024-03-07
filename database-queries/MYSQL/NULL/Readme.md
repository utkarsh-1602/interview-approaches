# SQL NULL Values
- A field with a `NULL` value is a field with no value.
- If a field in a table is optional, it is possible to insert a new record or update a record without adding a value to this field. Then, the field will be saved with a `NULL` value.
- It is not possible to test for NULL values with comparison operators, such as =, <, or <>.
- We will have to use the `IS NULL` and IS `NOT NULL` operators instead.

**IS NULL Syntax**:

        SELECT column_names
        FROM table_name
        WHERE column_name IS NULL;


**IS NOT NULL Syntax**:

        SELECT column_names
        FROM table_name
        WHERE column_name IS NOT NULL;


## CUSTOMERS

| CustomerID | CustomerName       | ContactName     | Address            | City       | PostalCode | Country |
|------------|--------------------|-----------------|--------------------|------------|------------|---------|
| 1          | Company A          | John Doe        | 123 Main Street    | New York   | 10001      | USA     |
| 2          | Company B          | Jane Smith      | 456 Oak Avenue     | Los Angeles| 90001      | USA     |
| 3          | Company C          | Michael Johnson | 789 Elm Drive      | Chicago    | 60601      | USA     |
| 4          | Company D          | Sarah Brown     | 101 Pine Road      | Houston    | 77001      | USA     |
| 5          | Company E          | Sarah Jaden     |                    | barcelona  | 77031      | SPAIN   |


### Q1
From the `CUSTOMERS` Table, lists all customers with a NULL value in the "Address" field.

```sql
SELECT * FROM CUSTOMERS WHERE Address IS NULL; 
```

### Q2
From the `CUSTOMERS` Table,  lists all customers with a value in the "Address" field:

```sql
SELECT * FROM CUSTOMERS WHERE Address IS NOT NULL; 
```