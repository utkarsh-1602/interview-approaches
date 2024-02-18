// what is destructuring in objects ? 

let user = {
    name : "utkarsh",
    age: 24,
    education: {
        degree: "btech",
        branch: "cse"
    }
};

const {name} = user;
console.log(name)

const {education: {degree}} = user;
console.log(degree);