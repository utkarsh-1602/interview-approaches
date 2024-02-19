function myFun(callback){
    var num = 10;
    function newOne(){
        console.log(callback() + " " + num)
    }
    
    return newOne;
}

function callback(){
    return 10;
}

var myFunction = myFun(callback);
myFunction()