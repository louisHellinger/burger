 -- * Create the `burgers_db`.
 --   * Switch to or use the `burgers_db`.
 --   * Create a `burgers` table with these fields:
 --     * **id**: an auto incrementing int that serves as the primary key.
 --     * **burger_name**: a string.
 --     * **devoured**: a boolean.
 --     * **date**: a TIMESTAMP.




CREATE DATABASE burgers_db;
USE burgers_db:

CREATE TABLE burgers (
  id INT AUTO_INCREMENT,
  burger_name VARCHAR(1000) NOT NULL,
  devoured BOOLEAN NOT NULL,
  date TIMESTAMP NOT NULL,
  PRIMARY KEY(id)

);

INSERT INTO burgers (burger_name) VALUES ("Bacon BBQ BIG MAC BURGER");

INSERT INTO burgers (burger_name) VALUES ("BIG & CHEESY and OH SO Greasy");

INSERT INTO burgers (burger_name) VALUES ("DOWNHOME Southern Fried Chicken Burger");