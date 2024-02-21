
for(let i=0; i<3; i++){
    function inner(i){
        setTimeout(() => {
            console.log(i);
        }, i*1000)
    }
    inner(i)
}