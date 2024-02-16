// from the given data, return only the detail of those students who score more than 60 marks and rollnumber greater than 15

let students = [
    {name: 'utkarsh', rollNumber: 1, marks: 99},
    {name: 'sam', rollNumber: 20, marks: 20},
    {name: 'sid', rollNumber: 3, marks: 46},
    {name: 'anil', rollNumber: 43, marks: 93}
]


const tops = students.filter((x) => x.marks > 60 && x.rollNumber > 15)
console.log(tops)