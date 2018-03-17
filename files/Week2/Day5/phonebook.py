class Phonebook(object):
    def __init__(self):
        self.entries = {}

    def setEntry(self, contact):
        self.entries[contact.name] = contact.number
    
    def rmvEntry(self, name):
        del self.entries[name]
    
    def listEntries(self):
        for entry in self.entries:
            print "%s: %s" % (entry, self.entries[entry])

class Contact(object):
    def __init__(self, name, number):
        self.name = name
        self.number = number

book = Phonebook()

def start():

    selection = int(raw_input("""
    Electronic Phone Book
    =====================
    1. Look up an entry
    2. Set an entry
    3. Delete an entry
    4. List all entries
    5. Quit
    What do you want to do (1-5)? """))
    
    # Search for an entry
    if selection == 1:
        searchedName = raw_input("Name: ").lower()
        if len(book.entries) > 0:
            for i in book.entries:
                if searchedName.lower() == i:
                    print "Found entry for %s: %s" % (searchedName, book.entries[i])
                    start()
                else: 
                    print "No entry found for %s" % (searchedName)
                    start()
        else: 
            print "You don't have any entries yet."
            start()
    # Add an entry
    elif selection == 2:
        entryName = raw_input("Name: ").lower()
        entryNumber = raw_input("Phone Number: ")
        entry = Contact(entryName, entryNumber)
        book.setEntry(entry)
        start()
    # Delete an entry
    elif selection == 3:
        entryName = raw_input("Who would you like to delete? ")
        if entryName in book.entries:
            book.rmvEntry(entryName)
            print "%s has been removed from your phonebook." % (entryName)
            start()
        else:
            print "%s is not in your phonebook." % (entryName)
            start()
    # List all entries
    elif selection == 4:
        if len(book.entries) > 0:
            book.listEntries()
            start()
        else: 
            print "You don't have any entries to list."
    
    else: 
        print "Bye."

start()