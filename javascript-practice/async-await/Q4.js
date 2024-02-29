// what's the output 

console.log('start')

function getUsername(username){
    setTimeout(() => {
        console.log(username)
    }, 2000)
}

const message = getUsername('utkarsh_coder')
console.log(message)

console.log('stop')
