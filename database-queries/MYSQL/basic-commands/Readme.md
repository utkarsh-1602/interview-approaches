# Sql Commands 

### 1. Create Database 

```sql
CREATE DATABASE database_name;
```

### 2. Use Database 

```sql
USE database_name;
```

### 3. Create Table 

```sql 
CREATE TABLE USERS(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NAME VARCHAR(100),
    EMAIL VARCHAR(100)
);
```
>Note: A table must have at least one visible column to create the table.

### 4. Describe the table 
- The DESCRIBE command displays metadata about the columns, indexes, and data partitions of tables or views

```sql
DESCRIBE USERS;
```

### 5. Insert Data into the table 

```sql
INSERT INTO USERS(NAME, EMAIL) VALUES 
('UTKARSH', 'utkarshuh16@gmail.com');
('SAM','sam@gmail.com');
```

### 6. Alter the table 
- The ALTER TABLE statement is used to add, delete, or modify columns in an existing table.

```sql
ALTER TABLE USERS MODIFY COLUMN ID INT AUTO_INCREMENT;
```
- create new column in existing table

```sql 
ALTER TABLE USERS 
ADD AGE INT NOT NULL DEFAULT 18;
```

### 7. Retrieve the Data from the table

```sql
SELECT * FROM USERS; 
```

- retrieve specific columns 
```sql 
SELECT NAME, EMAIL FROM USERS;
```

- retrieve data with conditions 
```sql 
SELECT * FROM USERS WHERE NAME = 'SAM';

```

### 8. exit Mysql command line 
```sql 
EXIT;
```
### Show tables present in the database
```sql 
SHOW TABLES;
```