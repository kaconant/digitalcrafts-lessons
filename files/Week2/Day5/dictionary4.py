# Write a word_histogram function that takes a paragraph of text as its input,
# and returns a dictionary containing the tally of how many times each word in the alphabet was used in the text. 
# For example:
# >>> word_histogram('To be or not to be')
# {'to': 2, 'be': 2, 'or': 1, 'not': 1} 

def word_histogram(sentence):
    tally = { }
    wordsList = sentence.split()
    for word in wordsList:
        if tally.get(word):
            tally[word] += 1
        else:
            tally[word] = 1
    print tally

word_histogram('to be or not to be') 

# random notes about this file 
