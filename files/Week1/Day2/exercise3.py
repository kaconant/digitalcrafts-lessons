total = float(raw_input("What is your total amount?"))
tip = float(raw_input("What is your tip percentage?"))
meal = total / 100 * tip
print "The tip is $%s" % meal