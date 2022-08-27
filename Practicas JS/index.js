"use strict";
exports.__esModule = true;
var Libro = /** @class */ (function () {
    function Libro(nombre, autor) {
        this.nombre = nombre;
        this.autor = autor;
    }
    Libro.prototype.getNombre = function () {
        return this.nombre;
    };
    return Libro;
}());
var Usuario = /** @class */ (function () {
    function Usuario(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    Usuario.prototype.getFullName = function () {
        return "".concat(this.nombre, " ").concat(this.apellido);
    };
    Usuario.prototype.addMascota = function (mascota) {
        this.mascotas.push(mascota);
    };
    Usuario.prototype.countMascotas = function () {
        return this.mascotas.length;
    };
    Usuario.prototype.addBook = function (nombre, autor) {
        this.libros.push(new Libro(nombre = nombre, autor = autor));
    };
    Usuario.prototype.getBookNames = function () {
        var nombresLibros = [];
        this.libros.forEach(function (el) {
            nombresLibros.push(el.getNombre());
        });
        return nombresLibros;
    };
    return Usuario;
}());
var user = new Usuario("juan", "perez");
console.log(user);
user.addBook("jardines", "lei don");
user.addMascota("perro");
user.addMascota("gato");
console.log(user.getBookNames());
