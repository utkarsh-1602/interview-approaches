# Params, Arguments, Spread Operator and Rest Operator

## Params and Arguments
**Params**:
- Parameters are the variables listed as part of a function's definition.
- Parameters are defined within the parentheses of a function declaration or expression.

**Args**:
- Arguments are the actual values that are passed to a function when it is called.
- Arguments are passed within the parentheses of a function call.


        function square(num) { // passing num as a parameter
        return num * num;
        }

        square(5); // passing 5 as an argument 


## Spread Operator and Rest Operator

- The spread and rest operators are both represented by three dots `(...)`, but they serve different purposes in JavaScript.
- The **spread operator** is used to spread elements of an iterable (like an array) into individual elements.
- The **rest operator** allows a function to accept an indefinite number of arguments as an array.


        function multiply(...nums){
            console.log(nums);
        }

        var arr = [5,6];
        multiply(...arr);


- The spread operator is used to expand elements of an iterable (like an array) into individual elements.
- In the provided example, ...arr spreads the elements of the arr array (which is [5, 6]) into individual arguments. So, multiply(...arr) essentially becomes multiply(5, 6).
- In the provided example, ...nums is the rest parameter, which collects all the arguments passed to the multiply function after the first two.
- So, multiply(...arr) passes 5 and 6 as arguments to the multiply function, and nums would be [5, 6]. Then, within the function, nums represents an array containing all the arguments beyond the first two.

> Note: When we use rest operator, it should always be the last argument or parameter passed to the function