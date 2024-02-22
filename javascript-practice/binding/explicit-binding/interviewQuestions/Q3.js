// whats the output


var status = "online"

setTimeout(() => {
    
    const status = "offline"

    const data = {
        status: "not responding",
        getStatus(){
            return this.status;
        }
    }

    console.log(data.getStatus())
    console.log(data.getStatus.call(this))
    // when you use data.getStatus.call(this), you're explicitly setting the context (this) of the getStatus() function to be the global scope.

}, 0);

