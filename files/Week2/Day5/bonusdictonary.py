# Given a histogram tally (one returned from either letter_histogram or word_summary), print the top 3 words or letters.

def topThree(tally):
    top_Three = {}
    while len(top_Three) < 3:
        highKey = ''
        highestValue = 0
        for key, value in tally.items():
            if value > highestValue:
                highKey = key
                highestValue = value
        top_Three[highKey] = tally[highKey]
        del tally[highKey]
    print top_Three

#OR

    def topThree(tally):
        sortedList = sorted(tally, key=tally.get)[::-1]
        print sortedList[::3]
