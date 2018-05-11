class Strings {
    // Reverses a string.
    reverse(toReverse) {
        return toReverse.split('').reverse().join('')
    }

    // Detectes if a string is a pallindrome
    detectPallindrome(toCheck) {
        var lowRegStr = toCheck.toLowerCase();
        var reverseStr = lowRegStr.split('').reverse().join('');
        return reverseStr === lowRegStr;
    }

    // Shifts every letter forward by one. Z goes
    // to A (wraps around)
    shift(toShift) {
        var alphabet = 'abcdefghijklmnopqrstuvwxyz';
        var news = '';
        for (var i = 0; i < toShift.length; i++) {
            let index = alphabet.indexOf(toShift[i])
            if (toShift[i] === 'z') {
                news += 'a';
            } else {
                news += alphabet[index + 1];
            }
        }
        return news;
    }

    // Checks to see if the target string is a number
    isNumber(toCheck) {
        return isNaN(parseInt(toCheck));
        } 
    }

module.exports = Strings