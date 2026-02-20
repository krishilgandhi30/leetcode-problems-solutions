-- Write your PostgreSQL query statement below
SELECT name
FROM Customer
WHERE referee_id IS DISTINCT FROM 2;