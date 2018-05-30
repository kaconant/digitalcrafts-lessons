1. What are tracks for a given album?

select tracks.name AS "track name", album.name as "album name"
	from tracks
	inner join album
		on tracks.albumid = album.id
		where albumid = 2;

2. What are the albums produced by a given artist?

select album.name AS "Album Name", artist.name AS "Artist Name"
	from album
	inner join artist
		on album.artistid = artist.id
		where artist.id = 1;


3. What is the track with the longest duration?

4. What are the albums released in the 60s? 70s? 80s? 90s?

5. How many albums did a given artist produce in the 90s?

6. What is each artist’s latest album?

7. List all albums along with its total duration based on summing the duration of its tracks.

8. What is the album with the longest duration?

9. Who are the 5 most prolific artists based on the number of albums they have recorded?

10. What are all the tracks a given artist has recorded?

11. What are the top 5 most often recorded songs?

12. Who are the top 5 song writers whose songs have been most often recorded?

13. Who is the most prolific song writer based on the number of songs he has written?

14. What songs has a given artist recorded?

15. Who are the song writers whose songs a given artist has recorded?

16. Who are the artists who have recorded a given song writer’s songs?
