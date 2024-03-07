# Operators in SQL 

## = (Equal)
Compares two values and returns true if they are equal.

### Q1
Retrieve all the names of people from the `COUNTRY` table who are from "India";
```sql
SELECT NAME FROM COUNTRY WHERE COUNTRY_NAME = "India";
```

## > (Greater than)
Used to check if one expression is greater than another.

### Q1
Retrieve all the products from the `PRODUCTS` table with a price greater than $100.
```sql
SELECT * FROM PRODUCTS WHERE PRODUCT_PRICE > 100; 
```


## < (Less than)
Used to check if one expression is less than another.

### Q1
Retrieve all the employees from the `EMPLOYEES` table who joined before the year 2000.

```sql 
SELECT * FROM EMPLOYEES WHERE JOIN_YEAR < 2000;
```

## >= (Greater than or equal)
Used to check if one expression is greater than or equal to another.

### Q1
Retrieve all the customers from the `CUSTOMERS` table who made purchases of $500 or more.
```sql
SELECT * FROM CUSTOMERS WHERE PURCHASE >= 500; 
```

## <= (Less than or equal) 
Used to check if one expression is less than or equal to another.

### Q1
Retrieve all the orders from the `ORDERS` table with order quantities less than or equal to 10.

```sql
SELECT * FROM ORDERS WHERE QUANTITY <= 10; 
```

## <> (Not equal)
Used to check if two expressions are not equal.

### Q1
Retrieve all the cities from the `CITIES` table that are not Paris.
```sql
SELECT * FROM CITIES WHERE CITY_NAME <> 'Paris';
```

## BETWEEN
Used to retrieve values within a specified range.

### Q1
Retrieve all the students from the `STUDENTS` table with ages between 18 and 25.

```sql
SELECT * FROM STUDENTS WHERE AGE BETWEEN 18 AND 25; 
```

## LIKE
Used to search for a specified pattern in a column.

### Q1
Retrieve all the products from the `PRODUCTS` table whose name starts with 'T-Shirt'.

for example, there could be columns with a product name like, 

        PRODUCT_NAME

        T-Shirt Stock 
        T-shirt Stock2 
        Brand new T-shirt Stock 
        T-Shirting you 

you need to find that specific pattern that matches the given question.  

```sql
SELECT * FROM PRODUCTS WHERE PRODUCT_NAME LIKE 'T-Shirt%';  
```

## IN
Used to specify multiple possible values for a column.
Retrieve all the employees from the `EMPLOYEES` table who are either managers or executives.

```sql
SELECT * FROM EMPLOYEES WHERE JOB_TITLE IN ('Manager', 'Executive');
```