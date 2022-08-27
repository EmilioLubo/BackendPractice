"use strict";
exports.__esModule = true;
var MrContador = /** @class */ (function () {
    function MrContador(nombre) {
        this.nombre = nombre;
        this.cuenta = 0;
    }
    MrContador.prototype.obtenerResponsable = function () {
        return this.nombre;
    };
    MrContador.prototype.obtenerCuentaIndividual = function () {
        return this.cuenta;
    };
    MrContador.prototype.obtenerCuentaTotal = function () {
        return MrContador.cuentaTotal;
    };
    MrContador.prototype.contar = function () {
        this.cuenta += 1;
        MrContador.cuentaTotal += 1;
    };
    MrContador.cuentaTotal = 0;
    return MrContador;
}());
var juan = new MrContador("juan");
var pedro = new MrContador("pedro");
juan.contar();
juan.contar();
juan.contar();
pedro.contar();
console.log(juan);
console.log(pedro);
console.log(juan.obtenerCuentaTotal());
