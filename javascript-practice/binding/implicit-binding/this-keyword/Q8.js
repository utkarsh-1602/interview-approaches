
const user = {
    name: 'utkarsh',
    logMessage(){
        console.log(this.name)
    }
}

setTimeout(user.logMessage, 1000)
// this will give undefined because, you are passing user.logMessage as a callback in setTimeout. In the case of setTimeout, the function user.logMessage is called without reference to user object, so this inside logMessage function refers to the global window object (or undefined in strict mode). Since window.name is undefined, you see undefined logged instead of 'utkarsh'.

// To fix this issue, you need to bind the this context explicitly to user when passing the function to setTimeout. You can do this using the bind() method.
setTimeout(user.logMessage.bind(user), 1000);

// there's another way to fix this issue also
// you can pass user.logMessage inside a anonymous function or an arrow function in settimeOut

setTimeout(function(){
    user.logMessage()
}, 1000)

setTimeout(() => {
    user.logMessage()
}, 1000)