# Relationships 

- Many relationships are established by having a foreign key on one side that references the primary key of the other side. 

- Ex: author_id integer REFERENCES author (id)

# Joins

- Inner Join: Takes two tables and only returns what is covered by both tables

- Ex: select * from article, author (((( tables to join )))) where article.author_id = author.id; (((( the join conditionals to apply ))))

- Cartesian Join: When you don't define the join conditionals, it pairs all of the information from both tables -- pretty useless

- Outer Join: (Left / Right) everything that matches plus everything from that one defined table. 

- Associative Table: Links each side as a many-to-one association

# Music Database 

- Has-a vs Is-a

## Designing Schema:

- A table's personal ID (ex: album id) is typically the foreign key for another table's main ID (ex: id)

- Artist: ID (serial integer), Name (varchar), Genre (varchar), Age (integer)

- Album: ID (serial integer), Name (varchar), Release Date (date), Sales (integer), Label Name (varchar), Artist ID (integer -- foreign key for artist id in artist table)

- Track: ID (serial integer), Name (varchar), Album ID (integer -- foreign key for album id in album table), Track Number (integer), Duration (integer), Song ID (integer -- foreign key for song ID in song table)

- Song: ID (serial integer), Name (varchar), Writer ID (interger -- foreign key for song writer ID in song writer table), Date (date)

- Song Writer: ID (serial integer), Name (varchar)

## Author the Schema:

- 
