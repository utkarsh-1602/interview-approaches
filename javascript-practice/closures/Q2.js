
function makeFunction(){
    var name = "mozilla"
    function displayName(num){
        console.log(name, num);
    }
    return displayName; 
}

makeFunction()(5)