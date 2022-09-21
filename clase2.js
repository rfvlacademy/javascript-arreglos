class Numbers {
    number1;
    number2;

    constructor(number1, number2) {
        this.number1 = number1;
        this.number2 = number2;
    }

    add() {
        return this.number1 + this.number2;
    }

    subtract() {
        return this.number1 - this.number2;
    }
}

let numberObj = new Numbers(1, 4.5);
console.log(numberObj.add());
let result = numberObj.subtract();
console.log(result);
