# ALTER TABLE 

### Q1

let's say, you have a `ORDERS` table, where you want to add a new column `age`, here's how you can do that: 

**syntax**: 
``` sql
ALTER TABLE table_name
ADD column_name data_type;
```

<h4 style="color: #FFD700;">Answer: </h4>

```sql 
ALTER TABLE ORDERS 
ADD age INT; 
```