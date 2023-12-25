class A {
    area(x, y) {
        console.log(x * y)
    }
}

class B extends A {
    area(a, b) {
        super.area(a, b); // The area function in class B invoked the area method in class A through super keyword – passing parameters a and b.  
        console.log('Class B')
    }
}

let newObject = new B()
newObject.area(10, 20)