// promise chaining 

console.log('start')

function getUsername(username){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(username)
        }, 1000)
    })

}

function likeTheVideo(name){

    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(`Subscribe channel ${name}`)
        }, 1000);

    })
}

getUsername("utkarshcoder").then((result) => {
    console.log(result);
    return likeTheVideo("of javascript");
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.error(err)
})


console.log('stop')
