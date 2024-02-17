// what's the output 

const settings = {
    username: "utkarsh",
    level: 1,
    health: 100
}

const data = JSON.stringify(settings, ["level", "health"])
console.log(data)