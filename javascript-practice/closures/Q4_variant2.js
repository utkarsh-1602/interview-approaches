(function createBase(num){
    return function (innerNum){
        console.log(innerNum + num)
    }
}
)(10)(20)