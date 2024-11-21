# Write your MySQL query statement below
UPDATE Salary
SET sex = CASE
    WHEN sex = 'm' THEN 'f'
    WHEN sex = 'f' THEN 'm'
    ELSE sex  -- This handles any unexpected values, if they exist
END;
