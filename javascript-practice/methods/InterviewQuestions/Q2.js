// from the given data, 
// add 20 marks to those who scored less than 60, and return total marks for all students whose marks are greater than 60
let students = [
    {name: 'utkarsh', rollNumber: 1, marks: 99},
    {name: 'sam', rollNumber: 2, marks: 20},
    {name: 'sid', rollNumber: 3, marks: 10},
    {name: 'anil', rollNumber: 4, marks: 50}
]

const distinction = students.map((x) => {
    if(x.marks < 60){
        x.marks += 20;
    }
    return x;
}).filter((x) => x.marks > 60).reduce((accumulator, currentValue) => accumulator + currentValue.marks   , 0);

console.log(distinction)
