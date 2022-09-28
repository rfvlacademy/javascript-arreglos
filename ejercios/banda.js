class Banda {
    integrantes;
    gastos;

    constructor(integrantes, gastos) {
        this.gastos = gastos;
        this.integrantes = integrantes;
    }

    getPromedio() {
        let total = 0;
        this.gastos.forEach((gasto, index) => {
            total = total + gasto;
            console.log('posicion', index, 'valor', gasto);
        })
        return total / this.integrantes;
    }

    getRotacion() {
        let promedio = this.getPromedio();
        let total = 0;
        this.gastos.forEach(gasto => {
            if (gasto < promedio) {
                total = total + (promedio - gasto);
            }
        })
        return total;
    }
}

module.exports = {Banda};