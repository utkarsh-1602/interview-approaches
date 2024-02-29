    let me = { 
        name: "Ashutosh Verma", 

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
    me.print(); 
    me.thisInRegular();