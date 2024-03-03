# JOIN operations 
In SQL, JOIN operations are used to combine rows from two or more tables based on a related column between them.

There are different types of JOIN operations:

## INNER JOIN
Returns rows when there is at least one match in both tables.

## LEFT JOIN (or LEFT OUTER JOIN)
Returns all rows from the left table and the matched rows from the right table. If there is no match, the result is NULL on the right side.

## RIGHT JOIN (or RIGHT OUTER JOIN)
Returns all rows from the right table and the matched rows from the left table. If there is no match, the result is NULL on the left side.

## FULL JOIN (or FULL OUTER JOIN)
Returns all rows when there is a match in one of the tables. This includes rows from both the left and right tables that don't have matches in the other table.

