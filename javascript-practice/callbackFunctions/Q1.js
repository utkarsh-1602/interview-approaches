// what's the output 

console.log('start')

function getUsername(username, callback){
    setTimeout(() => {
        callback(username)
    }, 1000)
}

const message = getUsername('utkarsh_coder', (msg) => {
    console.log(msg)
})
console.log(message)

console.log('stop')
