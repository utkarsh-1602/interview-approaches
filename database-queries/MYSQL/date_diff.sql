-- The DATEDIFF() function returns the interval between two timestamps or date values in a specified unit
-- q1 : Write a solution to find all dates' Id with higher temperatures compared to its previous dates (yesterday). Return the result table in any order.

SELECT id
FROM (
    SELECT id, temperature, LEAD(temperature, 1) OVER (ORDER BY id) AS nextTemp
    FROM Weather
) AS tempData
WHERE nextTemp > temperature;
