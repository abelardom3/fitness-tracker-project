DROP DATABASE IF EXISTS fitness_app;

CREATE DATABASE fitness_app;

DROP TABLE IF EXISTS fitness_tracker;


CREATE TABLE fitness_tracker(
    fit_id serial PRIMARY KEY, 
    workout text,
    duration text, 
    date DATE
);


INSERT INTO fitness_tracker(workout, duration, date) VALUES('arms', '1 hour', 'sep-30-2022');



