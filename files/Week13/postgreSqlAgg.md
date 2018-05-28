# Where vs Having

The WHERE clause is used to filer rows from a results. 

The HAVING clause is used to filter values in a GROUP BY. 

When SQL statements have both a WHERE clause and HAVING clause, keep in mind the WHERE clause is applied first, then the results grouped, and finally the groups filtered according to the HAVING clause.

# Typical format:

- Select
- From
- Where 
- Group By
- Having 
- Order

--

# Q&A for Agg

Q#1 - For our first foray into aggregates, we're going to stick to something simple. We want to know how many facilities exist - simply produce a total count.

A#1 - 
select count(*) from cd.facilities;  

Q#2 - Produce a count of the number of facilities that have a cost to guests of 10 or more.

A#2 - 
select count(*) from cd.facilities where guestcost >= 10;  

Q#3 - Produce a count of the number of recommendations each member has made. Order by member ID.

A#3 - 
select recommendedby, count(*) 
	from cd.members
	where recommendedby is not null
	group by recommendedby
order by recommendedby; 

Q#4 - Produce a list of the total number of slots booked per facility. For now, just produce an output table consisting of facility id and slots, sorted by facility id.

A#4 - 
select facid, sum(slots) as "Total Slots"
	from cd.bookings
	group by facid
order by facid; 

Q#5 - Produce a list of the total number of slots booked per facility in the month of September 2012. Produce an output table consisting of facility id and slots, sorted by the number of slots.

A#5 - 
select facid, sum(slots) as "Total Slots"
	from cd.bookings
	where
		starttime >= '2012-09-01'
		and starttime < '2012-10-01'
	group by facid
order by sum(slots);  

Q#6 - Produce a list of the total number of slots booked per facility per month in the year of 2012. Produce an output table consisting of facility id and slots, sorted by the id and month.

A#6 - 
select facid, extract(month from starttime) as month, sum(slots) as "Total Slots"
	from cd.bookings
	where
		starttime >= '2012-01-01'
		and starttime < '2013-01-01'
	group by facid, month
order by facid, month;  

Q#7 - Find the total number of members who have made at least one booking.

A#7 - 
select count(distinct memid) from cd.bookings

or

select count(*) from 
	(select distinct memid from cd.bookings) as mems

Q#8 - Produce a list of facilities with more than 1000 slots booked. Produce an output table consisting of facility id and hours, sorted by facility id.

A#8 - 
select facid, sum(slots) as "Total Slots"
        from cd.bookings
        group by facid
        having sum(slots) > 1000
        order by facid  

Q#9 - Produce a list of facilities along with their total revenue. The output table should consist of facility name and revenue, sorted by revenue. Remember that there's a different cost for guests and members!

A#9 - 
select facs.name, sum(slots * case
			when memid = 0 then facs.guestcost
			else facs.membercost
		end) as revenue
	from cd.bookings bks
	inner join cd.facilities facs
		on bks.facid = facs.facid
	group by facs.name
order by revenue;   

Q#10 - Produce a list of facilities with a total revenue less than 1000. Produce an output table consisting of facility name and revenue, sorted by revenue. Remember that there's a different cost for guests and members!

A#10 - 
select name, revenue from (
	select facs.name, sum(case 
				when memid = 0 then slots * facs.guestcost
				else slots * membercost
			end) as revenue
		from cd.bookings bks
		inner join cd.facilities facs
			on bks.facid = facs.facid
		group by facs.name
	) as agg where revenue < 1000
order by revenue; 

Q#11 - 

A#11 - 

Q#12 - 

A#12 - 

Q#13 - 

A#13 - 

Q#14 - 

A#14 - 

Q#15 - 

A#15 - 

Q#16 - 

A#16 - 