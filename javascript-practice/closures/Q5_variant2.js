
for(let i=0; i<3; i++){
    setTimeout(() => {
        console.log(i)
    }, i*1000)
}

/*

    With let, i is block-scoped, meaning each iteration of the loop has its own separate i variable.
    Each setTimeout function captures a different i variable due to the block scope created by the let declaration.
    As a result, each console.log(i) prints the value of i at the time it was created, which is different for each iteration of the loop.

 */