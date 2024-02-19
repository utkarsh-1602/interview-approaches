
function myFun(callback){
    var num = 10;
    function newone(){
        console.log(callback() + num);
    }

    return newone;

}

function callback(){
    return 10;
}

var x = myFun(callback);
x()