# OR Operator 

- The OR operator is used to filter records based on more than one condition
- when using the OR operator, At Least One Condition Must Be True.
- The WHERE clause can contain one or more OR operators.

### Q1
From the `CUSTOMERS` table, retrive all customers name who are from country Germany but also those from Spain.

```sql
SELECT * CUSTOMER_NAME FROM CUSTOMERS WHERE COUNTRY_NAME = 'Germany' OR COUNTRY_NAME = 'Spain'; 
```

### Q2 
return all fields from `CUSTOMERS` table where either City is "Berlin", CustomerName starts with the letter "G" or Country is "Norway":

```sql 
SELECT * FROM CUSTOMERS WHERE CITY = 'Berlin' OR CUSTOMER_NAME LIKE 'G%' OR COUNTRY = 'Norway';
```

# Combining AND and OR Operator 

Refer: [Combining AND & OR](../AND/Readme.md)