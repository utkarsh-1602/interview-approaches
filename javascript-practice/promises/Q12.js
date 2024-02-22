// promise combinators 

console.log('start')

function getUsername(username){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(username)
        }, 2000)
    })

}

function likeTheVideo(name){

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            reject(`Subscribe channel ${name}`)
        }, 1000);

    })
}


Promise.allSettled([getUsername("utkarsh_coder"), likeTheVideo("javascript")])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})


console.log('stop')
