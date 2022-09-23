let numbers = [-5, 10, 8, 7, 9];

function deMenorAMayor(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        let help = arreglo[i];
        for (let j = i + 1; j < arreglo.length; j++) {
            if (arreglo[j] < arreglo[i]) {
                arreglo[i] = arreglo[j]
                arreglo[j] = help;
                help = arreglo[i];
            }
        }
    }
    return arreglo;
}

function deMayorAMeno(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        let help = arreglo[i];
        for (let j = i + 1; j < arreglo.length; j++) {
            if (arreglo[j] > arreglo[i]) {
                arreglo[i] = arreglo[j]
                arreglo[j] = help;
                help = arreglo[i];
            }
        }
    }
    return arreglo;
}

console.log('-----------')
let numberMenorAMayor = deMenorAMayor(numbers)
console.log(numberMenorAMayor);
numberMenorAMayor.forEach(number => console.log(number));
console.log('-----------')
let MayorAMeno = deMayorAMeno(numbers)
console.log(MayorAMeno);

/** filtros en arreglos*/

let users = [{name: 'rfalconi', email: 'r@g.com'}, {name: 'kperez', email: 'k@gm.com'}];
let userFilter = users.filter(user => user.email === 'r@g.com' && user.name=='rfalconi');
console.log(userFilter);
console.log(numbers.filter(number=> number%2!==0));
console.log(numbers.filter(number=> number%2==0));

