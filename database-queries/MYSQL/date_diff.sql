-- The DATEDIFF() function returns the interval between two timestamps or date values in a specified unit
-- q1 : Write a solution to find all dates' Id with higher temperatures compared to its previous dates (yesterday). Return the result table in any order.

select w1.id 
from Weather w1, Weather w2
where DATEDIFF(w1.recordDate, w2.recordDate) = 1 
and w1.temperature > w2.temperature;