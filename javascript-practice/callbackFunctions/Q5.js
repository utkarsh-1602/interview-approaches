// what's the output 

console.log('start')

function getUsername(username, callback){
    setTimeout(() => {
        callback(username)
    }, 1000)
}

function likeTheVideo(name, callback){
    setTimeout(() => {
        callback(`Subscribe channel ${name}`)
    }, 1000);
}

const message = getUsername('utkarsh_coder', (msg) => {
    console.log(msg)
    likeTheVideo('javascript', (video) => {
        console.log(video)
    })
})

console.log(message)

console.log('stop')
