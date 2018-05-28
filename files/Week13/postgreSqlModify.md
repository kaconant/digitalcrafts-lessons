Q#1 - The club is adding a new facility - a spa. We need to add it into the facilities table. Use the following values:

facid: 9, Name: 'Spa', membercost: 20, guestcost: 30, initialoutlay: 100000, monthlymaintenance: 800.

A#1 - 
insert into cd.facilities
    (facid, name, membercost, guestcost, initialoutlay, monthlymaintenance)
    values (9, 'Spa', 20, 30, 100000, 800);   

    or

insert into cd.facilities values (9, 'Spa', 20, 30, 100000, 800);

Q#2 - In the previous exercise, you learned how to add a facility. Now you're going to add multiple facilities in one command. Use the following values:

facid: 9, Name: 'Spa', membercost: 20, guestcost: 30, initialoutlay: 100000, monthlymaintenance: 800.

facid: 10, Name: 'Squash Court 2', membercost: 3.5, guestcost: 17.5, initialoutlay: 5000, monthlymaintenance: 80.

A#2 - 
insert into cd.facilities
    (facid, name, membercost, guestcost, initialoutlay, monthlymaintenance)
    values
        (9, 'Spa', 20, 30, 100000, 800),
        (10, 'Squash Court 2', 3.5, 17.5, 5000, 80); 

    or

insert into cd.facilities
    (facid, name, membercost, guestcost, initialoutlay, monthlymaintenance)
    SELECT 9, 'Spa', 20, 30, 100000, 800
    UNION ALL
        SELECT 10, 'Squash Court 2', 3.5, 17.5, 5000, 80;

Q#3 - Let's try adding the spa to the facilities table again. This time, though, we want to automatically generate the value for the next facid, rather than specifying it as a constant. Use the following values for everything else:

Name: 'Spa', membercost: 20, guestcost: 30, initialoutlay: 100000, monthlymaintenance: 800.

A#3 - 
insert into cd.facilities
    (facid, name, membercost, guestcost, initialoutlay, monthlymaintenance)
    select (select max(facid) from cd.facilities)+1, 'Spa', 20, 30, 100000, 800;  
    
    // could also fix with using serial when initially defining facid

Q#4 - We made a mistake when entering the data for the second tennis court. The initial outlay was 10000 rather than 8000: you need to alter the data to fix the error.

A#4 - 
update cd.facilities
    set initialoutlay = 10000
    where facid = 1;       

Q#5 - We want to increase the price of the tennis courts for both members and guests. Update the costs to be 6 for members, and 30 for guests.

A#5 - update cd.facilities
    set
        membercost = 6,
        guestcost = 30
    where facid in (0,1);  // where name like 'Tennis%'

Q#6 - We want to alter the price of the second tennis court so that it costs 10% more than the first one. Try to do this without using constant values for the prices, so that we can reuse the statement if we want to.

A#6 - 
update cd.facilities facs
    set
        membercost = (select membercost * 1.1 from cd.facilities where facid = 0),
        guestcost = (select guestcost * 1.1 from cd.facilities where facid = 0)
    where facs.facid = 1;   

    or

update cd.facilities facs
    set
        membercost = facs2.membercost * 1.1,
        guestcost = facs2.guestcost * 1.1
    from (select * from cd.facilities where facid = 0) facs2
    where facs.facid = 1;

Q#7 - As part of a clearout of our database, we want to delete all bookings from the cd.bookings table. How can we accomplish this?

A#7 - 
delete from cd.bookings;    

or

truncate cd.bookings; // when in doubt, use delete

Q#8 - We want to remove member 37, who has never made a booking, from our database. How can we achieve that?

A#8 - delete from cd.members where memid = 37;   

Q#9 - In our previous exercises, we deleted a specific member who had never made a booking. How can we make that more general, to delete all members who have never made a booking?

A#9 - 
delete from cd.members where memid not in (select memid from cd.bookings);    