
function createBase(num){
    return function (innerNum){
        console.log(innerNum + num)
    }
}

var addSix = createBase(6);

addSix(10);
addSix(20);
