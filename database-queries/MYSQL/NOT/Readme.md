# NOT Operator 

The NOT operator is used in combination with other operators to give the opposite result, also called the negative result.

### Q1
From the `CUSTOMERS` table, we want to return all customers that are NOT from Spain
```sql
SELECT * FROM CUSTOMERS WHERE NOT COUNTRY = 'Spain';
```

## NOT BETWEEN 
The `NOT BETWEEN` operator in SQL is used to negate the condition specified by the BETWEEN operator. It retrieves rows where a specified column's value falls outside of a given range.

### Q1
from `CUSTOMERS` table, Select customers with a customerID not between 10 and 60:

```sql
SELECT * FROM CUSTOMERS WHERE CUSTOMER_ID NOT BETWEEN 10 AND 60;
```

## NOT IN 

The `NOT IN` operator in SQL is used to negate a condition based on a list of values. 

### Q1 
From the `CUSTOMERS` table, Select retrive all the columns where the cities are not from Paris or London.

```sql 
SELECT * FROM CUSTOMERS WHERE CITY NOT IN ('Paris', 'London');
```

## NOT Greater Than

### Q1
From the `CUSTOMERS` table, Select customers with a CustomerId not greater than 50:

```sql 
SELECT * FROM CUSTOMERS WHERE NOT CUSTOMER_ID < 50; 
```

## NOT Less Than

### Q1
From the `CUSTOMERS` table, Select customers with a CustomerID not less than 50:

```sql 
SELECT * FROM CUSTOMERS WHERE NOT CUSTOMER_ID > 50;
```