/*
Write code to
Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', and phone of '483-485-4948', store it in the variable sonny.
Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', and phone of '495-586-3456', store it in the variable 'jordan'.
Have sonny greet jordan using the greet method.
Have jordan greet sonny using the greet method.
Write a print statement to print the contact info (email and phone) of Sonny.
Write another print statement to print the contact info of Jordan.
*/

function Person(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

Person.prototype.greet = function(other) {
console.log('Hello ' + other.name + ', I am ' + this.name + '!');
};

var jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');
var sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');

jordan.greet(sonny);
sonny.greet(jordan);

console.log('Sonny/s Email: ' + sonny.email + 'and Sonny/s Phone: ' + sonny.phone);
console.log('Jordan/s Email: ' + jordan.email + 'and Jordan/s Phone: ' + jordan.phone);

