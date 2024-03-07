# ORDER BY Keyword

- The ORDER BY keyword is used to sort the result-set in ascending or descending order.
- You should specify the column by which you want to order the results.

**Syntax:**

        SELECT column1, column2, ...
        FROM table_name
        ORDER BY column1, column2, ... ASC|DESC;

### Q1 
Retrieve all the products from `PRODUCTS` table in ascending order. 

```sql 
SELECT * FROM PRODUCTS ORDER BY PRODUCT_ID ASC;
```

### Q2
Retrieve the price of products from the `PRODUCTS` table in descending order. 

```sql 
SELECT PRICE FROM PRODUCTS ORDER BY PRICE DESC; 
```

### Q3
Imagine you are a manager at a retail store, and you're tasked with generating a report that lists all available products sorted first by their category in ascending order, and then within each category, by their price in descending order.

```sql
SELECT * FROM PRODUCTS ORDER BY CATEGORY ASC, PRICE DESC; 
```

