class Libro{
    private nombre:string;
    private autor:string;

    constructor(nombre:string, autor:string){
        this.nombre = nombre;
        this.autor = autor;
    }

    getNombre():string{
        return this.nombre;
    }
}

class Usuario{

    private nombre:string;
    private apellido:string;
    private libros:Array<Libro>;
    private mascotas:Array<string>;

    constructor(nombre:string, apellido:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName():string{
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota:string):void{
        this.mascotas.push(mascota);
    }

    countMascotas():number{
        return this.mascotas.length;
    }

    addBook(nombre:string, autor:string):void{
        this.libros.push(new Libro(nombre=nombre, autor=autor));
    }

    getBookNames():Array<string>{
        const nombresLibros:Array<string> = [];
        this.libros.forEach(el => {
            nombresLibros.push(el.getNombre());
        });
        return nombresLibros;
    }

}

const user = new Usuario("juan", "perez");
console.log(user);
user.addBook("jardines", "lei don");
user.addMascota("perro");
user.addMascota("gato");
console.log(user.getBookNames());
export{};
