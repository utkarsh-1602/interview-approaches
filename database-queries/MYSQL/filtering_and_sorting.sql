-- Q1- Retrieve the names of employees who have a salary greater than $50,000 and sort the result by salary in descending order.
SELECT NAME FROM EMPLOYEES WHERE SALARY > 50000 ORDER BY SALARY DESC; 

-- Q2- Retrieve the names and hire dates of employees, sorted by hire date in ascending order. Display employees with NULL hire dates last.
SELECT NAME, HIRE_DATE FROM EMPLOYEES ORDER BY HIRE_DATE IS NULL, HIRE_DATE; 

-- Q3- Retrieve the names and hire dates of employees hired in the last three months.
SELECT NAME, HIRE_DATE FROM EMPLOYEES WHERE HIRE_DATE >= CURRENT_DATE() - INTERVAL '3' MONTH;

-- Q4- Retrieve the names and job titles of employees, sorted by job title in a custom order ('Manager' first, followed by 'Analyst', 'Clerk', 'President', 'Salesman', 'Technician').
SELECT NAME, JOB_TITLE FROM EMPLOYEES ORDER BY 
CASE JOB_TITLE  
    WHEN 'MANAGER' THEN 1 
    WHEN 'ANALYST' THEN 2 
    WHEN 'CLERK' THEN 3    
    WHEN 'PRESIDENT' THEN 4 
    WHEN 'SALESMAN' THEN 5
    WHEN 'TECHNICIAN' THEN 6
END


