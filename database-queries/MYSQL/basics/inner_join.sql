-- The INNER JOIN keyword selects records that have matching values in both tables
select Product.product_name, Sales.year, Sales.price from Sales 
inner join Product 
on Product.product_id = Sales.product_id