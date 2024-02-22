// what's the output 

var lengthy = 4;

function callback(){
    console.log(this.lengthy);
}

const obj = {
    lengthy: 5,
    myFun(fn){
        fn();
    },
};

obj.myFun(callback);