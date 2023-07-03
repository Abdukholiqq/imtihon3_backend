create database imtihon3;
create table cars(
    cars_id int primary key,
    car_name varchar(50),
    motor varchar(50),
    color varchar(20),
    gearbook varchar(60),
    tanirovka varchar(6),
    distance int,
    price int,
    car_year int,
    img_external varchar,
    img_internal varchar,
    img_model varchar,
);

create table category(
    category_id int primary key,
    category_name varchar(60),
    category_img varchar
    sub_category_id int sub_category(sub_category_id)
);
create table sub_category(
    sub_category_id int primary key,
    sub_category_name varchar(60),
    sub_category_img varchar
    category_id int references category(category_id)
);
 

alter table cars add constraint
    category_id references category(category_id),
    sub_category_id references sub_category(sub_category_id);

    ALTER TABLE
    "cars" ADD CONSTRAINT "attendances_att_category_id_foreign"
     FOREIGN KEY("att_category_id") REFERENCES "category"("category_id");