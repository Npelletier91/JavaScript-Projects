

function countVowels(str) {
    let count = 0;
    const lowerCase = str.toLowerCase();
    for (let i = 0; i < lowerCase.length; i++) {
        if (lowerCase[i] == 'a' || lowerCase[i] == 'e' || lowerCase[i] == 'i' || lowerCase[i] == 'o' || lowerCase[i] == 'u') {
            count++;
        }
    }
    return count
}

console.log(countVowels("hello"));
console.log(countVowels('omgididit!'))

// reversing a string

function reverseWord(string) {
    // declaring a variable that will be "split" into an array,
    // "reversed" and "joined" back together 
    return string.split('').reverse().join('');

}


console.log(reverseWord("hello"))


// find the longest word

function longestWord(str) {
    let wordLength = 0
    let longest = 0
    for (let i = 0; i < str.split('').length; i++) {
        if (str[i] !== ' ') {
            wordLength++;
        }
        else {
            // updating 'longest' from the 'wordLength' that
            // is currently being counted
            // more efficient way here:
            // "longest = Math.max(longest,wordLength);"
            if (wordLength > longest) {
                longest = wordLength   
            }
            else {
                wordLength = 0
            }
            wordLength = 0
        }
    }
    return longest
}

console.log(longestWord("this is my sentence for the longest word"))
console.log(longestWord("another example here"))