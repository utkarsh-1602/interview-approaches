-- DISTINCT keyword in SQL eliminates all duplicate records from the result returned by the SQL query 

select distinct author_id as id from Views
where author_id = viewer_id 
order by id;

