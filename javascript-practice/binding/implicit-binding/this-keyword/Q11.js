
var length = 4;

function callback(){
    console.log(this.length)
}

const object = {
    length: 5,
    method(){
        // arguments is taking all the values passed as a arguments in method() in an array
        // console.log(arguments)
        arguments[0](); 
    }
}

object.method(callback, 2, 3)