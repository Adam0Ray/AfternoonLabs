CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
 		person_id INTEGER,
    product_name VARCHAR(40) NOT NULL,
    product_price FLOAT,
  	quantity INTEGER
);

INSERT INTO orders(person_id, product_name, product_price, quantity)
VALUES (0,'burger', 10, 1),
(0,'hotdog', 5, 1),
(1,'burger', 5, 1),
(1,'hotdog', 5, 1),
(1,'hotdog', 5, 1);

SELECT * from orders

SELECT COUNT(*) FROM orders

SELECT SUM(product_price* quantity) FROM orders

SELECT SUM(product_price * quantity) FROM orders WHERE person_id = 0;