let number = [-5, -10, 6, 7, 9];
let name = 'rafael';
let flag = true;
let flag2 = false;
let number1 = 22;
let objeto = {atributo: name, habilitado: flag};
console.log(number);
console.log(objeto);

if ((number1 < 11) || (flag == true)) {
    console.log(number1)
} else if (number > 1) {
    console.log('verdero');
}
console.log('----------------');
/**i=i+1;
 i+=1;
 i++;*/
for (let index = 0; index < number.length; index++) {
    console.log(number[index]);
}

while (flag2 == false) {
    console.log(flag2);
    flag2 = true;
}
let numberTemp = 1;
do {
    console.log(numberTemp);
    numberTemp++
} while (numberTemp < 1)

function nombre(number, name) {
    console.log(number, name);

}

console.log('----------------');
number.forEach(function (element) {
    console.log(element);
})
console.log('----------------');
number.forEach((element) => {
    console.log(element)
});
nombre(1, "rafael");