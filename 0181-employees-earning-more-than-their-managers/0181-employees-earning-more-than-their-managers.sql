-- Write your PostgreSQL query statement below
SELECT e.name as employee
FROM Employee e
JOIN Employee m ON e.managerId = m.id
WHERE e.salary > m.salary;
