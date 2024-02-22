function fun1(callback) {
    callback();
}

function fun2() {
    console.log("This is a callback function")
}

fun1(fun2)