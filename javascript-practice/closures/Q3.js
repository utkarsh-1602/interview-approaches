
var username = 'utkarsh'
function makeFunction(){
    var name = "mozilla"
    function displayName(num){
        console.log(name, num, username);
    }
    return displayName; 
}

makeFunction()(5)