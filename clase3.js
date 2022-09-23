let numbers = [-5, 10, 6, 7, 9];

for (let number in numbers) {
    console.log(number);
}

numbers.forEach(number => console.log(number));

function deMenorAMayor(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        let help = arreglo[i];
        for (let j = i + 1; j < arreglo.length; j++) {
            if (arreglo[j] < arreglo[i]) {
                arreglo[i] = arreglo[j]
                arreglo[j] = help;
            }
        }
    }
    return arreglo;
}
console.log('-----------')
let numberMenorAMayor = deMenorAMayor(numbers)
console.log(numberMenorAMayor);
numberMenorAMayor.forEach(number => console.log(number));