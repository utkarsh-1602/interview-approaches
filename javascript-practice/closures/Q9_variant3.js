// create a private counter using a closure 

(function counter(){

    var _counter = 0;
    function add(increment){
        _counter += increment;
    }   

    function retrieve(){
        console.log(_counter);
    }

    add(30)
    
    return{
        add,
        retrieve
    }

})().retrieve()