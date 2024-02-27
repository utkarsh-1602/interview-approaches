var user = {
    name : "utkarsh"
}

function myFun(job, location){
    console.log(`Hello ${this.name}, are you a ${job} in ${location} ?`)
}

const x = myFun.bind(user)
x('software developer', 'india')
x('entreprenuer', 'usa')