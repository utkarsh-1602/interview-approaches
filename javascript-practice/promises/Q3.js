// what's the output

console.log('start')

const x = new Promise((resolve, reject) => {
    setTimeout(() => {
        const code = true;
        if(code){
            resolve("Code is True") 
        }
        else{
            reject(new Error("Code is False"));
        }
    }, 1000)
})

x.then((res) => {
    console.log(res); // if the promise is resolved it will return the result 
})
.catch((error) => {
    console.log(error) // if the promise is rejected it will return the error
})

console.log('end')