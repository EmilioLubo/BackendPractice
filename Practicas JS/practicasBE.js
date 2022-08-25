class Contador{

    constructor(nombre){
        this.nombre = nombre;
        this.cuenta = 0;
    }

    static cuentaTotal = 0;

    obtenerResponsable(){
        return this.nombre;
    }

    obtenerCuentaIndividual(){
        return this.cuenta;
    }

    obtenerCuentaTotal(){
        return Contador.cuentaTotal;
    }

    contar(){
        this.cuenta += 1;
        Contador.cuentaTotal += 1;
    }
}
const juan = new Contador("juan");
const pedro = new Contador("pedro");

juan.contar();
juan.contar();
juan.contar();
pedro.contar();

console.log(juan);
console.log(pedro);
console.log(juan.obtenerCuentaTotal());