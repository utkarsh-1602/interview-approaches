// What's the output 

const user = {
    name: "utkarsh",
    greet(){
        return `Hello, ${this.name}`
    },

    farewell: () => {
        return `Bye, ${this.name}`
    }
}

console.log(user.greet())
console.log(user.farewell())