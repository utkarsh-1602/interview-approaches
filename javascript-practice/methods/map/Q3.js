let students = [
    {name: 'utkarsh', rollNumber: 1, marks: 99},
    {name: 'sam', rollNumber: 2, marks: 90},
    {name: 'sid', rollNumber: 3, marks: 91},
    {name: 'anil', rollNumber: 4, marks: 93}
]

// from this given data, print the names of the students in uppercase 
const names = students.map((x) => x.name.toUpperCase())
console.log(names)