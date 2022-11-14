DROP DATABASE IF EXISTS fitness_app ;
CREATE DATABASE fitness_app ;


DROP TABLE IF EXISTS fitness_tracker CASCADE;
DROP TABLE IF EXISTS fit_accounts CASCADE; 



CREATE TABLE fit_accounts(
    user_id serial PRIMARY KEY, 
    name text, 
    email text, 
    password text
);



CREATE TABLE fitness_tracker(
    fit_id serial PRIMARY KEY, 
    workout text,
    duration text, 
    date DATE,
   user_id INT, 
     FOREIGN KEY(user_id) REFERENCES fit_accounts(user_id)
);



INSERT INTO fit_accounts(name, email, password) VALUES('abelardo', 'abe@gmail.com', 'password');

INSERT INTO fitness_tracker(workout, duration, date, user_id) VALUES('Arms', '1 hour', 'oct-03-2022', 1);




