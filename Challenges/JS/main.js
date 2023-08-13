

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
