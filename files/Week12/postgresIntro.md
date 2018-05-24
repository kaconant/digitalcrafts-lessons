* Database - like a spreadsheet, columns and rows. 
* Structured Query Language (SQL) - language for working with databases
* Postgres - open source SQL database, must be structured in how you input the information (row and column), looking for very specific information
* Other SQL databases: MySQL, Oracle, MariaDB, MS SQL Server (Microsofts)

* SQL is good at modeling relationships:
- "all posts that belong to this author for this year" 
- "all members in this grp have liked each other's photos"
- "10 most recent reviews for these three neighborhoods"

Alternatives to SQL: 
- MongoDB, Firebase (Firestore)

NoSQL databases are good for:
- functions more like a folder
- fast key/value storage/retrieval
- no structure in document storage, okay with mixed info (doesnt always have to be the same fields from the same users)

------

Q#1 - How can you retrieve all the information from the cd.facilities table?

A#1 - select * from cd.facilities;  

Q#2 - You want to print out a list of all of the facilities and their cost to members. How would you retrieve a list of only facility names and costs?

A#2 - select name, membercost from cd.facilities; 

Q#3 - How can you produce a list of facilities that charge a fee to members?

A#3 - select * from cd.facilities where membercost > 0; 

Q#4 - How can you produce a list of facilities that charge a fee to members, and that fee is less than 1/50th of the monthly maintenance cost? Return the facid, facility name, member cost, and monthly maintenance of the facilities in question.

A#4 - select facid, name, membercost, monthlymaintenance 
	        from cd.facilities 
	        where 
		            membercost > 0 and 
		            (membercost < monthlymaintenance/50.0);  

Q#5 - How can you produce a list of all facilities with the word 'Tennis' in their name?

A#5 - select *
	        from cd.facilities 
	        where 
		            name like '%Tennis%';    

Q#6 - How can you retrieve the details of facilities with ID 1 and 5. Try to do it without using the OR operator.

A#6 - select *
	        from cd.facilities 
	        where 
		        facid in (1,5);  

Q#7 - How can you produce a list of facilities, with each labelled as 'cheap' or 'expensive' depending on if their monthly maintenance cost is more than $100? Return the name and monthly maintenance of the facilities in question.

A#7 - select name, 
	        case when (monthlymaintenance > 100) then
		            'expensive'
	        else
		            'cheap'
	        end as cost
	        from cd.facilities;     

Q#8 - How can you produce a list of members who joined after the start of September 2012? Return the memid, surname, firstname, and joindate of the members in question.

A#8 - select memid, surname, firstname, joindate 
	    from cd.members
	    where joindate >= '2012-09-01'; 

Q#9 - How can you produce an ordered list of the first 10 surnames in the members table? The list must not contain duplicates.

A#9 - select distinct surname 
	    from cd.members
order by surname
limit 10;  

Q#10 - You, for some reason, want a combined list of all surnames and all facility names. Yes, this is a contrived example :-). Produce that list!

A#10 -  select surname 
	            from cd.members
        union
        select name
	            from cd.facilities; 

Q#11 - You'd like to get the signup date of your last member. How can you retrieve this information?

A#11 - select max(joindate) as latest
	        from cd.members; 

Q#12 - You'd like to get the first and last name of the last member(s) who signed up - not just the date. How can you do that?

A#12 - select firstname, surname, joindate
	        from cd.members
	        where joindate = 
		        (select max(joindate) 
			        from cd.members); 