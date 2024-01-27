// let's say we have a data, and a particular part of that data we need to retrieve in our website. so for that we will use map() method 
const data = [
    {
        title: "Apple",
        description: "Tastiest fruit",
        price:'100$'
    },
    {
        title: "Mango",
        description: "Delicious fruit",
        price:'50$'
    },
    {
        title: "Grape",
        description: "Sour fruit",
        price:'40$'
    },
    {
        title: "Cucumber",
        description: "Its not a fruit",
        price:'20$'
    },
];

const retrieveData = data.map(x => {
    return {
        content : `${x.title} : ${x.description}`,
        price: x.price
    }
})

console.log(retrieveData)