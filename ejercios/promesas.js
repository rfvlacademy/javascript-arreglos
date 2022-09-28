const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([15,7,10,9])
    }, 300);
});
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('hola mundo vengo desde una promesa')
    }, 300);
});
function obtenerPromedio(datos){
    let totalElementos=datos.length;
    let total=0;
    datos.forEach(dato=>total+=dato);
    return total/totalElementos;
}
myPromise.then(data => console.log(obtenerPromedio(data)));
myPromise2.then(data => console.log(data)).catch(error=>console.log('error',error));