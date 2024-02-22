
function user(){
    return{
        name: 'utkarsh',
        ref(){
            return this; // this will point to the return object 
        }
    }
}

let x = user();
console.log(x.ref().name);