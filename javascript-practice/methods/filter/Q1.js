// from the given data, return only the detail of those students who score more than 60 marks

let students = [
    {name: 'utkarsh', rollNumber: 1, marks: 99},
    {name: 'sam', rollNumber: 2, marks: 20},
    {name: 'sid', rollNumber: 3, marks: 46},
    {name: 'anil', rollNumber: 4, marks: 93}
]


const tops = students.filter((x) => x.marks > 60)
console.log(tops)