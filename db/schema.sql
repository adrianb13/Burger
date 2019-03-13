DROP DATABASE burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id int(11) NOT NULL AUTO_INCREMENT,
    burger_name varchar(50) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);

USE burgers_db;
SELECT * FROM burgers;