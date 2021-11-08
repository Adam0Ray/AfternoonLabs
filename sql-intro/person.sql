CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    age INTEGER,
  	height_cm INTEGER,
  	city VARCHAR(40),
  	favorite_color VARCHAR(40)  
);

INSERT INTO person(name, age, height_cm, city, favorite_color)
VALUES ('John', 29, 172, 'Dallas', 'blue'),
('John', 26, 190, 'Austin', 'blue'),
('Sam', 22, 173, 'Dallas', 'green'),
('Jimmy', 19, 152, 'Houston', 'blue'),
('Todd', 35, 179, 'Dallas', 'black');

SELECT * FROM person
ORDER BY height_cm DESC;

SELECT * FROM person
ORDER BY height_cm ASC;

SELECT * FROM person
ORDER BY age DESC;

SELECT * FROM person
WHERE age > 20;

SELECT * FROM person
WHERE age = 18;

SELECT * FROM person
WHERE age
NOT BETWEEN 20 AND 30;

SELECT * FROM person
WHERE age != 27;

SELECT * FROM person
WHERE favorite_color != 'red';

SELECT * FROM person
WHERE favorite_color != 'red' AND favorite_color != 'blue';

SELECT * FROM person
WHERE favorite_color = 'orange' OR favorite_color = 'green';

SELECT * FROM person
WHERE favorite_color IN ('orange', 'green', 'blue');

SELECT * FROM person
WHERE favorite_color IN ('yellow', 'purple');