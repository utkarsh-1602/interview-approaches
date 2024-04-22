// implement sum(2)(6)(1)

(function mySum(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
        }(3)
    }(2)
})(1)