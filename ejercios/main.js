const {Banda} = require('./banda');
const {FizzBuzz} = require('./FizzBuzz');
const bandaObj = new Banda(4, [15, 15.01, 3.01, 3]);
console.log('total a rotar', bandaObj.getRotacion());
const fizzBuzz = new FizzBuzz();
console.log('----------');
fizzBuzz.fizzBuzz();
