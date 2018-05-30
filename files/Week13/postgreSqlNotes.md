# 3 ways to execute SQL:

- psq shell (type in terminal: psql databaseName)
- psq to run in a .sql file (type in terminal: psql databaseName -f my_sql_statements.sql)
- use postico application

Database - has many tables, like an app
Tables - has many rows, like a class in OO
Rows - has many columns - like an object instance in OO
Columns - individual values

# SQL Statements

- CREATE DATABASE
- CREATE TABLE
- Data Types
- INSERT
- Constraints
- Select Statement

# Data Types

- String Types: char(n), varchar(n), varchar (best to just use varchar) - use single quotes
- Number Types: integer, numeric, real
- Data / Timestamp
- Boolean - use TRUE or FALSE or 't' or 'f'

# Syntax Notes

- Table names - use double quotes 
- Nulls - PostgreSQL represents the empty value, use NULL

# Messing with Data

- order has to match field definition
- update will allow you to change data
- delete is dangerious & cannot retrieve (make sure you are doing backups)

# Default Values
- DEFAULT 0 or DEFAULT FALSE

# Contraints
- NOT NULL, prevents columns from being NULL
- UNIQUE, prevents any 2 rows in table from having same value
- CHECK, allows number range checking

# Primary Keys
- allows you to uniquely identify a row (like how an ID works)

# Serial IDs
- an integer that goes up by one each time you insert a new record
- combo of serial and primary key is common 

# Select *
- allows you to select all with *

# Where Clause
- only use = 
- can combine two clauess with the word and
- finding something like this: like '%tennis%';

# How PostgreSQL works:
0. this is under the impression you are importing a database
1. Go into Postico and make database name
2. post in terminal in the folder where the databse information is: psql database name -f database.sql
3. should be updated for you to see those tables in postico