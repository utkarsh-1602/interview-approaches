// Reference: https://youtu.be/sZjlEKbaykc?list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5&t=1367

for(var i = 0; i <3; i++){
    function inner(i){
        setTimeout(() => {
            console.log(i);
        }, i*1000);
    }
    inner(i)
}

// In the code you provided, when you call the inner function inside the loop, it creates a closure over the i variable. This means that each time inner is called, it captures the current value of i and associates it with the callback function passed to setTimeout.

