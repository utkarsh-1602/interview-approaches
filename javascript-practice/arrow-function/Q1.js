let myObject = { 
    name: "utkarsh hadgekar", 

    thisInArrow:() => { 
    console.log("My name is " + this.name); // no 'this' binding here 
    }, 

    thisInRegular(){ 
    console.log("My name is " + this.name); // 'this' binding works here 
    } 
   };

myObject.thisInArrow(); 
myObject.thisInRegular();