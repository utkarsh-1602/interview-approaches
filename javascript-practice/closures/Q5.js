// Reference: https://youtu.be/sZjlEKbaykc?list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&t=1367

for(var i=0; i<3; i++){
    function inner(i){
        setTimeout(function log(){
            console.log(i);
        }, i*1000);
    }

    inner(i)
}