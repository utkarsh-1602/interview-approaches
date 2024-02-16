# Concepts used in this section 

## Chaining 
In JavaScript, chaining is a way of connecting multiple actions together so that you can perform them in sequence on some data, like an array. When you chain methods like `filter()` and `map()`, you're applying those methods one after another to the same data.

        const numbers = [1, 2, 3, 4, 5];

        const result = numbers
        .filter(num => num % 2 === 0) // Keep only even numbers
        .map(num => num * 2);          // Double each number

        console.log(result); // Output: [4, 8]
