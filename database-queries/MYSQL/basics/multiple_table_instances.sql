-- Write your MySQL query statement below
-- # find total time = activity_type(end - start)
-- # average time = total time / no. of process 
-- # The ROUND() function rounds a number to a specified number of decimal places.
-- leetcode question - https://leetcode.com/problems/average-time-of-process-per-machine/description/?envType=study-plan-v2&envId=top-sql-50


select a1.machine_id, round(avg(a2.timestamp - a1.timestamp), 3) as processing_time
from Activity a1 
join Activity a2
on a1.machine_id = a2.machine_id and a1.process_id = a2.process_id 
and a1.activity_type = 'start' and a2.activity_type='end'
group by a1.machine_id 