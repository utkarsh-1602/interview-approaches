# SELECT Statement 

The SELECT statement is used to select data from a database.

### Q1
Retrieve all the customers name from the `CUSTOMER` table.

```sql
SELECT NAME FROM CUSTOMER; 
```

### Q2
retrieve all the columns from the `CUSTOMER` table

```sql
SELECT * FROM CUSTOMER;
```

# SELECT DISTINCT 

The `SELECT DISTINCT` statement is used to return only distinct (different) values.


### Q1 
Select all the different countries from the `Customers` table:
```sql 
SELECT DISTINCT Country FROM Customers;
```
