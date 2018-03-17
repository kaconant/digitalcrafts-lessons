total = float(raw_input('What is the total?'))
service = str(raw_input('How was the quality of service: good, fair, or bad?')).lower()
people = int(raw_input('How many people will split the check?'))

while not service in ['good','fair','bad']:
    print "Not sure what you mean there."
    service = str(raw_input('Try again. How was the quality of service: good, fair, or bad?')).lower()
else: 
    if service.strip() == 'good':
        totalPlusTip = total * 1.2
    elif service.strip() == 'fair':
        totalPlusTip = total * 1.15
    elif service.strip() == 'bad':
        totalPlusTip = total * 1.10
perPerson = totalPlusTip / people
print "Each person will pay $%s" % perPerson