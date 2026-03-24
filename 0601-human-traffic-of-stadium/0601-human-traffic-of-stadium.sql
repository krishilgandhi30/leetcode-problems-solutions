-- Write your PostgreSQL query statement below
WITH group_consecutive AS (
    SELECT 
        id, 
        visit_date, 
        people,
        -- Subtract the row number from the id to create a 'group_id'
        -- Consecutive IDs will result in the same constant value
        id - ROW_NUMBER() OVER (ORDER BY id) as diff
    FROM Stadium
    WHERE people >= 100
),
counts AS (
    SELECT 
        *,
        -- Count how many rows are in each 'diff' group
        COUNT(*) OVER (PARTITION BY diff) as group_count
    FROM group_consecutive
)
SELECT 
    id, 
    visit_date, 
    people
FROM counts
WHERE group_count >= 3
ORDER BY visit_date;