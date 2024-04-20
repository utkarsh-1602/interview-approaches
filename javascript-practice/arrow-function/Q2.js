let myObject = { 
    name: "utkarsh hadgekar", 

    print: function (){

        const thisInArrow = () => { 
            console.log("My name is " + this.name);  // now it has access to this keyword
            }
        thisInArrow()
    },

    thisInRegular(){ 
    console.log("My name is " + this.name); 
    } 
};

myObject.print(); 
myObject.thisInRegular();