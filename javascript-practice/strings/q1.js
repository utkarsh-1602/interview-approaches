var string = "I am Utkarsh"

var reverseEntireSentence = reverseBySeparator(string, "");
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

console.log(reverseEachWord)

function reverseBySeparator(string, separator){
    return string.split(separator).reverse().join(separator)
}
