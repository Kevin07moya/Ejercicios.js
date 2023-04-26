class Animal{
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    saludar(){
        let saludo = `Hola soy un animal y mi nombre es  ${this.nombre}`
        return saludo;
    }
}

class Gato extends Animal{
    constructor(nombre, genero, color){
        super(nombre, genero);
        this.color = color;
        this.raza = null;
    }

    saludar(){
        let saludo = `Hola soy un gato y mi nombre es  ${this.nombre} y mi raza ${this.raza}`
        return saludo;
    }

    get getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        return this.raza =raza;
    }
}

const milla = new Gato("milla","macho","cafecito");
console.log(milla);
console.log(milla.saludar());

milla.setRaza = "Angora turco";
console.log(milla.saludar());
