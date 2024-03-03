# add the current time stamp column

let's say you have a `ORDERS` table with an existing column `date` where you want to add the current timestamp (showcasing date and time) for every id, you can acheive it by this query:

```sql 
ALTER TABLE ORDERS 
MODIFY COLUMN date TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
```

This command alters the date column in the orders table to be of type `TIMESTAMP` and sets its default value to the current timestamp using `CURRENT_TIMESTAMP`.

