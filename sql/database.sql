CREATE DATABASE node_mysql_ts;

CREATE TABLE post(

    id INT (11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (200) NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP

);

DESCRIBE node_mysql_ts;