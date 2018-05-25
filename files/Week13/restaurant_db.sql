CREATE TABLE restaurant1
(
    id SERIAL PRIMARY KEY,
    name varchar(20) NOT NULL,
    distance numeric NOT NULL,
    stars integer NOT NULL,
    category varchar(15) NOT NULL,
    favoriteDish varchar NOT NULL,
    takeOut boolean NOT NULL,
    lastTimeEaten date NOT NULL
);

INSERT INTO restaurant1 (name, distance, stars, category, favoritedish, takeout, lasttimeeaten)
VALUES
('FarmBurger',0.5,4,'American','Burgers',TRUE,'2018-05-22'),
('RuSans',0.6,2,'Sushi','Spicy Tuna HandRoll',TRUE,'2018-05-20'),
('Nats BBQ',1.4,5,'American','Ribs',FALSE,'2018-04-20'),
('Benatalis ',2,4,'Italian','Spaghetti',FALSE,'2017-12-22'),
('KitKat Fresh',0.3,1,'Greek','Spring Salad',TRUE,'2018-02-14'),
('PokeBar',3,5,'Sushi','Poke Bowl',TRUE,'2018-05-05'),
('NaanStop',0.3,3,'Indian','Naan',TRUE,'2018-05-10'),
('St. Celicias',1.9,5,'Italian','Pasta',FALSE,'2018-03-13');

-- Basic Queries

-- 1. The names of the restaurants that you gave a 5 stars to

select * 
	from restaurant1
	where stars = 5;

-- 2. The favorite dishes of all 5-star restaurants

select name, favoritedish
    from restaurant1
    where stars = 5;

-- 3. The the id of a restaurant by a specific restaurant name, say ‘NaanStop’

select id 
    from restaurant1
    where name like '%NaanStop%';
    
-- 4. restaurants in the category of ‘American’

select name
    from restaurant1
    where category like '%American%';

-- 5. restaurants that do take out

select name 
    from restaurant1
    where takeOUT = 't';

-- 6. restaurants that do take out and is in the category of ‘American’

select name 
    from restaurant1
    where takeOUT = 't' and category like '%American%';

-- 7. restaurants within 2 miles

select name 
    from restaurant1
    where distance <= 2;

-- 8. restaurants you haven’t ate at in the last week

select name, lastTimeEaten
    from restaurant1
    where lastTimeEaten <= '2018-05-16';

-- 9. restaurants you haven’t ate at in the last week and has 5 stars

select name, lastTimeEaten, stars
    from restaurant1
    where lastTimeEaten <= '2018-05-16' and stars = 5;

-- Aggregations

-- 1. list restaurants by the closest distance.

select *
    from restaurant1
    order by distance;

-- 2. list the top 2 restaurants by distance.

select * 
    from restaurant1
    order by distance limit 2;

-- 3.  list the top 2 restaurants by stars.

select * 
    from restaurant1
    order by stars desc;

-- 4. list the top 2 restaurants by stars where the distance is less than 2 miles.

select * 
    from restaurant1
    where distance <= 2
    order by stars desc limit 2;

-- 5. count the number of restaurants in the db

select * 
    from restaurant1
    where distance <= 2
    order by stars desc limit 2;

-- 6. count the number of restaurants by category.

select count(category)
    from restaurant1;

-- 7. get the average stars per restaurant by category.

select avg(stars), category
    from restaurant1
    group by category;

-- 8. get the max stars of a restaurant by category.

select max(stars), category
    from restaurant1
    group by category;