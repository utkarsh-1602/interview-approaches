// Write a function that finds the longest word in a sentence
let word = "The quick brown fox jumpsssss over the lazy dog"

function findLongestWord(x){
    const words = x.split(' ')
    let longestWord = ''

    for(let i=0; i<words.length; i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i]
        }
    }

    console.log(longestWord)
}

findLongestWord(word)