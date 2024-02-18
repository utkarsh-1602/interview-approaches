
function changeAgeAndReference(person){
    person.age = 30;
    person = {
        name: "sam",
        age: 18
    };

    return person;
}


const personObj1 = {
    name: "utkarsh",
    age: 21
}   

console.log(personObj1)

const personObj2 = changeAgeAndReference(personObj1);


console.log(personObj1)

console.log(personObj2)