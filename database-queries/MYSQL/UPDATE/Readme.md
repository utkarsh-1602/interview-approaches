# UPDATE 
`UPDATE` command is used to update the existing values of one or more columns and rows. 

**syntax**:
```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

### Q1
you have a `ORDERS` table, where you have columns `ORDER_ID, USER_ID, AMOUNT, date` and right now the value of `date` column for all rows is set to `NULL`. and you want to update the existing value of `date` column for each row given in the table. 

right now, the table looks like this:

        +----------+---------+--------+------+
        | ORDER_ID | USER_ID | AMOUNT | date |
        +----------+---------+--------+------+
        |        1 |    NULL | 100.00 | NULL |
        |        2 |    NULL | 200.00 | NULL |
        |        3 |    NULL | 300.00 | NULL |
        |        4 |    NULL | 400.00 | NULL |
        +----------+---------+--------+------+

<h4 style="color: #FFD700;">Answer: </h4>

```sql
UPDATE ORDERS
SET date = CURRENT_TIMESTAMP;
```

now the table looks like this:

        +----------+---------+--------+---------------------+
        | ORDER_ID | USER_ID | AMOUNT | date                |
        +----------+---------+--------+---------------------+
        |        1 |    NULL | 100.00 | 2024-03-03 15:10:46 |
        |        2 |    NULL | 200.00 | 2024-03-03 15:10:46 |
        |        3 |    NULL | 300.00 | 2024-03-03 15:10:46 |
        |        4 |    NULL | 400.00 | 2024-03-03 15:10:46 |
        +----------+---------+--------+---------------------+
