// from the given data, return the sum of all marks of students 

let students = [
    {name: 'utkarsh', rollNumber: 1, marks: 99},
    {name: 'sam', rollNumber: 20, marks: 20},
    {name: 'sid', rollNumber: 3, marks: 46},
    {name: 'anil', rollNumber: 43, marks: 93}
]


const totalSum = students.reduce((accumulator, currentValue) => accumulator + currentValue.marks, 0)
console.log(totalSum)