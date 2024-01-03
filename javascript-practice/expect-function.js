/**
 * @param {string} val
 * @return {Object}
 */
//  The expect function is a part of the popular testing framework called Jasmine, and it is used for creating assertions in a more readable and expressive manner.

// In this specific implementation, the expect function takes a value (val) and returns an object with two methods: toBe and notToBe. These methods are used for making equality assertions.

var expect = function(val) {

    return{
        toBe: (val2) => {
            if(val === val2) return true;
            else throw new Error("Not Equal")
        },

        notToBe: (val2) => {
            if(val !== val2) return true;
            else throw new Error("Equal")
        }
    }
};

console.log(expect(5).toBe(5))
console.log(expect(5).toBe(4))
