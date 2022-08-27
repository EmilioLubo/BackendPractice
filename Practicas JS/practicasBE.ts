class MrContador{

    private nombre:string;
    private cuenta:number;

    constructor(nombre:string){
        this.nombre = nombre;
        this.cuenta = 0;
    }

    private static cuentaTotal = 0;

    obtenerResponsable():string{
        return this.nombre;
    }

    obtenerCuentaIndividual():number{
        return this.cuenta;
    }

    obtenerCuentaTotal():number{
        return MrContador.cuentaTotal;
    }

    contar():void{
        this.cuenta += 1;
        MrContador.cuentaTotal += 1;
    }
}
var juan = new MrContador("juan");
var pedro = new MrContador("pedro");

juan.contar();
juan.contar();
juan.contar();
pedro.contar();

console.log(juan);
console.log(pedro);
console.log(juan.obtenerCuentaTotal());
export{};