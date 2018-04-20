/* "Our website will make a request to the server.""
When computers talk to each other, they can only talk one at a time, back and forth. 

Ajax uses HTML for this.
HTTP: Language computers talk to each other.

*---
First step: Request --> Verb + URL

Verb options: get (get resource - css file, JSON data), post (create new record of this information), 
put (update or edit current database with this new information), del or delete (remove this row of information),
patch (making partial changes to existing information by adding at the end - acts like an array.push)

URL: web.com/api/dog or web.com/api/cat

Request Example: get web.com/api/dog

*---
Second step: Response --> Status + Payload 

Status:
200 range - Success
300 range - Redirection 
400 range - Client error (ex: 404) - your fault
500 range - Server error - their fault

Payload is typically in form of JSON object (but not always):
{ 
    id: info,
    name: info,
};

You can also use JSON API or GraphQL
https://www.getpostman.com/

How do you use it?
var URL = "http://dc-coffeerun.api/coffeeorders";
$.get(URL);
$.get(URL, function(data) {
    console.log(data);
});
$.post(URL, myData);
$.post(URL, myData, function (resp) {
    console.log(resp);
})

IP address = protocol + domain (+ path + query string)
1. protocol = http:// -- if you want to access the internet ** https, s = secure
2. domain = google.com
3. path or route = google.com/whatever/whatever again/you get it
4. after ? = query string, ex: http://google.com/users?apikey=L93E79&a=9&name=adam

subdomain: http://dev. --> live version that devs can mess with --> staging environment 

api --> nerd talk to tell you how to use their server
REST or restful architecture --> optional set of rules that talks about the paths 
ex of REST: every chunk of your path must be a noun
*/