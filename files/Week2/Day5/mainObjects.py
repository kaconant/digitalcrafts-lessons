#main objects info 

class Person(object):
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = []
        self.counter = 0

    def add_friend(self, friendName):
        self.friends.append(friendName)

    def greet(self, other_person):
        print 'Hello %s, I am %s!' % (other_person.name, self.name )
        other_person.counter += 1 

    def print_contact_info(self):
        print 'Sonny\'s email: %s, Sonny\'s phone: %s' % (self.email, self.phone)

    def num_friends(self):
        print len(self.friends)

    def __repr__(self):
        return " %s, %s, %s" % (self.name, self.email, self.phone)
# The __repr__ method simply tells Python how to print objects of a class

Sonny = Person('Sonny', 'sonny@hotmail.com', '483-485-4948')
Jordan = Person('Jordan', 'jordan@aol.com', '495-586-3456')

# Give Sonny friends
Jordan.add_friend(Sonny)
Sonny.add_friend(Jordan)

#Have Jordan greet Sonny
Jordan.greet(Sonny)

# Have Sonny greet Jordan
Sonny.greet(Jordan)

# print Sonny's contact info 
Sonny.print_contact_info()

# Print number of friends Sonny has
Sonny.num_friends()

# Print Sonny in Jordan's friend group
print Jordan.friends[0].name

# Count number of greetings Jordan has had
print Jordan.counter

#The __repr__ method simply tells Python how to print objects of a class
print Sonny.__repr__()