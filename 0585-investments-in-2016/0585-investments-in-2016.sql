-- Write your PostgreSQL query statement below
SELECT 
    ROUND(SUM(tiv_2016)::DECIMAL, 2) AS tiv_2016
FROM (
    SELECT 
        tiv_2016,
        COUNT(*) OVER(PARTITION BY tiv_2015) AS count_tiv_2015,
        COUNT(*) OVER(PARTITION BY lat, lon) AS count_location
    FROM Insurance
) sub
WHERE count_tiv_2015 > 1  -- Same tiv_2015 as at least one other
  AND count_location = 1; -- Unique location (lat, lon)