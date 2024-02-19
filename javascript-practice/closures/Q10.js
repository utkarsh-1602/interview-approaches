// Make this run only once 

let view;

function likeTheVideo(){

    let count = 0;

    return function(){
        if(count > 0){
            console.log("Hello again")
        }
        else{
            view = "utkarsh";
            console.log("Hello " + view)
            count++;
        }
    }
}

let x = likeTheVideo();
x()
x()
x()
x()
x()
x()
