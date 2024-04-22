
(function curriedAdd(x){
    return function(y){
        console.log(x + y);
    }
}
)(4)(3)