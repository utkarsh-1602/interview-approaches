// what's the output 

console.log('start')

function getUsername(username){
    setTimeout(() => {
        console.log(username)
    }, 2000)
}

const message = getUsername('utkarsh_coder')
console.log(message)
// here as we know getUsername is an async function, but its not waiting for the execution to complete, so that's why. It logs the value which is undefined.
console.log('stop')

// and when the sync functions are completed, then getUsername execution will complete, and it will log the given value in the parameter. 
