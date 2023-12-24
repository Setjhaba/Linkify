CREATE DATABASE Linkify;

CREATE USER admin WITH ENCRYPTED PASSWORD admin@001

\du

 GRANT ALL PRIVILEGES ON DATABASE Linkify TO admin;

CREATE TABLE users (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    UNIQUE (email)
);

INSERT INTO users (username, password, email) values ('Setjhaba', 'Jeremiah29:11', "sech@test.com");

CREATE TABLE links (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    users_id BIGINT NOT NULL REFERENCES users(id),
    link VARCHAR(50) NOT NULL
);