// create a private counter using a closure 

function counter(){

    var _counter = 0;
    function add(increment){
        _counter += increment;
    }   

    function retrieve(){
        return _counter;
    }

    return{
        add,
        retrieve
    }

}

var x = counter();
x.add(10);
x.add(5);
console.log(x.retrieve())