# lower case

lowerString = raw_input("Lowercase this: ")
print(lowerString.lower())

#or with result prompt
lowerString = raw_input("Lowercase this: ")
print "Result: %s" % lowerString.lower()

# upper case 
upperString = raw_input("Uppercase this: ")
print(upperString.upper())

#or with result prompt
upperString = raw_input("Uppercase this: ")
print "Result: %s" % upperString.upper()

#capitalize first letter
capitalizeString = raw_input("Capitalize this: ")
print(capitalizeString.capitalize())

#reverse a string
reverseString = raw_input("Reverse this: ")
print "Result: %s" % reverseString[::-1]

#Leetspeak
stringToLeet = raw_input("Leet this: ").lower()

stringToLeet = stringToLeet.replace("a", "4")
stringToLeet = stringToLeet.replace("e", "3")
stringToLeet = stringToLeet.replace("g", "6")
stringToLeet = stringToLeet.replace("i", "1")
stringToLeet = stringToLeet.replace("o", "0")
stringToLeet = stringToLeet.replace("s", "5")
stringToLeet = stringToLeet.replace("t", "7")

print stringToLeet

#long vowels

word = raw_input('Enter a word:').lower()
longVowels = ["oo", "ee", "aa", "ii", "uu"]
result = ""
for index in range(len(word)):
    twoLetters = word[index:index + 2]
    if twoLetters in longVowels:
        result += word[index] * 4
    else:
        result += word[index]

print result

# or this way
word = raw_input('Enter a word:').lower()
word = word.replace("ee", "eeeee")
word = word.replace("ii", "iiiii")
word = word.replace("aa", "aaaaa")
word = word.replace("oo", "ooooo")
word = word.replace("uu", "uuuuu")
print word

#caesar cipher - unk
secret = "Lbh zhfg hayrnea, jung lbh unir yrnearq."
offset = 13
alphabet = 'abcdefghijklmnopqrstuvwxyz'
result = ''

for char in secret:
    ascii_code = ord(char)
    is_uppercase = ascii_code >= 65 and ascii_code <= 90
    char = char.lower()
    if char not in alphabet:
        new_char = char
    else:
        idx = alphabet.find(char)
        new_idx = idx + offset
        if new_idx > 25:
            new_idx = new_idx - 26
        new_char = alphabet[new_idx]
        if is_uppercase:
            new_char = new_char.upper()
    result += new_char

print result
