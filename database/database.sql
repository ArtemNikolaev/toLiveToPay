create schema toLiveToPay collate utf8mb4_0900_ai_ci;

use toLiveToPay;

create table toLiveToPay.budgets
(
    id      int auto_increment
        primary key,
    user_id int  not null,
    begin   date not null,
    end     date not null,
    sum     int  not null
);

create table toLiveToPay.categories
(
    id      int auto_increment
        primary key,
    user_id int  not null,
    parent  int  null,
    name    text not null
);

create table toLiveToPay.savings
(
    id      int auto_increment
        primary key,
    user_id int                                not null,
    date    datetime default CURRENT_TIMESTAMP null,
    sum     int                                not null
);

create table toLiveToPay.spends
(
    id          int auto_increment
        primary key,
    user_id     int                                not null,
    category_id int                                not null,
    date        datetime default CURRENT_TIMESTAMP null,
    sum         int                                not null
);

create table toLiveToPay.users
(
    id       int auto_increment
        primary key,
    email    varchar(100) not null,
    password text         not null,
    salt     text         not null
);
