class Animal {
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }

    saludar(){
        let msj = `Hola, mi nombre es ${this.nombre}`
        return msj;

    }
}

const perro = new Animal("Tony", "Macho");

console.log(perro);
console.log(perro.saludar());