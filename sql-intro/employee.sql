SELECT first_name, last_name FROM employee WHERE city = 'Calgary';

SELECT MAX(birth_date) from employee;

SELECT MIN(birth_date) from employee;

-- SELECT * FROM employee get Nancy employee_id which is 2, then
SELECT * FROM employee WHERE reports_to = 2;

SELECT COUNT(*) FROM employee WHERE city = 'Lethbridge';