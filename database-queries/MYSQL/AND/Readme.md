# AND Operator 

- The AND operator is used to filter records based on more than one condition.
- all the conditions must be true when using the AND operator.
- The WHERE clause can contain one or many `AND` operators.

### Q1
return all customers from Spain that starts with the letter 'G'

```sql 
SELECT * FROM CUSTOMERS WHERE COUNTRY_NAME = 'Spain' AND CUSTOMER_NAME LIKE 'G%';

```

### Q2
retrive all columns from `CUSTOMERS` Table where Country is "Germany" AND City is "Berlin" AND PostalCode is higher than 12000:

```sql 
SELECT * FROM CUSTOMERS WHERE COUNTRY_NAME = 'Germany' AND CITY = 'Berlin' AND POSTAL_CODE > 12000; 
```

## Combining AND & OR Operator
You can combine the AND and OR operators

### Q1
retrieve all columns from `CUSTOMERS` table where country is Spain and customer name starts with a "G" or an "R".

```sql 
SELECT * FROM CUSTOMERS WHERE COUNTRY_NAME = 'Spain' AND (CUSTOMERS_NAME LIKE 'G%' OR CUSTOMERS_NAME LIKE 'R%');
```

