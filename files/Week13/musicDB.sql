CREATE TABLE artist (
    id serial primary key,
    name varchar (50),
    genre varchar (50),
    age integer
);

CREATE TABLE album (
    id serial primary key,
    artistID integer,
    name varchar (50),
    releaseDate date,
    sales integer,
    label varchar (50)
);

CREATE TABLE tracks (
    id serial primary key,
    albumID integer,
    songID integer,
    name varchar (50),
    trackNumber integer,
    duration integer
);

CREATE TABLE songs (
    id serial primary key,
    writerID integer,
    name varchar (50),
    date date
);

CREATE TABLE songWriter (
    id serial primary key,
    name varchar (50)
);

