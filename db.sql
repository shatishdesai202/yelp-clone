-- create database - CREATE DATABASE databasename;
--CREATE DATABASE yelp_clone;

-- list of all database 
-- \l

-- move anothor database - \c database name
-- \c yelp_clone

CREATE TABLE restaurant (
   id BIGSERIAL NOT NULL PRIMARY KEY,
   name VARCHAR(50) NOT NULL,
   location VARCHAR(50) NOT NULL,
   price_range INT NOT NULL check(price_range >=1 and price_range <=5)
);

-- insert data into table

INSERT INTO restaurant (name, location, price_range) VALUES ('Avadh', 'L.H.Road',5); --MAKE SURE STRING IN ''(SINGLE QUOTES)


CREATE TABLE reviews(
   id BIGSERIAL NOT NULL PRIMARY KEY, -- auto id
   restaurant_id  BIGINT NOT NULL REFERENCES restaurant(id) ON DELETE CASCADE,
   name VARCHAR(50) NOT NULL,
   review TEXT NOT NULL,
   rating INT NOT NULL check(rating >=1 and rating <=5) 
);

INSERT INTO reviews (restaurant_id, name, review, rating) VALUES (1,"shatish desai", "very Good", 3);

DELETE FROM reviews WHERE id=1;

select restaurant_id,count(rating),trunc(AVG(rating),1) AS average_rating from reviews group by restaurant_id;

-- join query
select * from restaurant left join(select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurant.id = reviews.restaurant_id;

select * from restaurant left join(select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurant.id = reviews.restaurant_id where id = 34;
