function outerFunction() {
    let outerVariable = 'I am from outer function';

    return function innerFunction() {
        console.log(outerVariable);
    }

}

outerFunction()();