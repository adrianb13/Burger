USE sva22b2g9qvv2wyw;

CREATE TABLE burgers (
	id int(11) NOT NULL AUTO_INCREMENT,
    burger_name varchar(50) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);
