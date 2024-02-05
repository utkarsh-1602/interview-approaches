-- The GROUP BY statement groups rows that have the same values into summary rows, like "find the number of customers in each country".
-- The GROUP BY statement is often used with aggregate functions (COUNT(), MAX(), MIN(), SUM(), AVG()) to group the result-set by one or more columns.
-- The COUNT() function returns the number of rows that matches a specified criterion.

SELECT COUNT(CustomerID) as customer_count, Country
FROM Customers
GROUP BY Country;
