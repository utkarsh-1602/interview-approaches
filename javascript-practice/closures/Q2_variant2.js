
function makeFunction(){
    var name = "mozilla"
    function displayName(num){
        console.log(name, num);
    }

    function displayAge(age){
        console.log(name, age);
    }

    return function(num){
        displayName(num);
        return function(age){
            displayAge(age);
        }
    }
}

makeFunction()(5)(21)