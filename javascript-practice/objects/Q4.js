// Looping through Objects 

const user = {
    name: 'utkarsh',
    age: 21, 
    likeAndSubscribe: true,
}


// print keys 
for(key in user){
    console.log(key);
}

// print values 
for(val in user){
    console.log(user[val]);
}