let person = {name: "utkarsh"}
const members = [person];
person = null;
// person is set to null, meaning the variable person no longer holds a reference to the object. However, the object itself still exists in memory and is referenced by the members array.
// When you log members, it still contains the object with the name property set to "utkarsh", as setting person to null didn't affect the object within the array.

console.log(members)