class firstClass {

    add() {
        console.log("First method")
    }

}


class secondClass {

    add() {
        console.log(30 + 40);
    }

}

class thirdClass extends secondClass {

    add() {
        console.log("Last Method")
    }
}

let x = new firstClass();
let y = new secondClass();
let z = new thirdClass();

x.add()
y.add()
z.add()


