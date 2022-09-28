class FizzBuzz {
    fizzBuzz() {
        for (let i = 1; i <= 30; i++) {
            let print = '';
            if (i % 3 == 0) {
                print += 'Fizz';
            }
            if (i % 5 == 0) {
                print += 'Buzz';
            }
            console.log(i, print);
        }
    }
}

module.exports = {FizzBuzz};