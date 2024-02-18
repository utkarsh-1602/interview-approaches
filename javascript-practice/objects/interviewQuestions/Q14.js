// What's the output ? 

const value = {number: 10}

const multiply = (x = {...value}) => { 
    console.log(x.number *= 2)
}

multiply(); 
// When multiply() is called for the first time, it doesn't receive any argument, so x is assigned a copy of value (its cloning the object) Inside the function, x.number *= 2 doubles the number property of x, which is 10. So, console.log(x.number) prints 20.
multiply(); // same 


multiply(value);
// This time, multiply(value) is called with value as an argument. Inside the function, x is assigned a reference to the same object as value, not a copy. So, x.number *= 2 doubles the number property of value, which is 10. The result is 20.

multiply(value)
// Similar to the third call, multiply(value) is again called with value as an argument. Since x is a reference to the same object as value, the object's number property is now 20 (doubled from the previous call). x.number *= 2 doubles it again, resulting in 40.
