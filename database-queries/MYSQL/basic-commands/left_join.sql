-- The LEFT JOIN keyword returns all records from the left table (table1), and the matching records from the right table (table2)
select Employees.name, EmployeeUNI.unique_id 
from Employees 
left join EmployeeUNI
on EmployeeUNI.id = Employees.id 

 