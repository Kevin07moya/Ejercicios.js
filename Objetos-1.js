/*Objetos
Los objetos son conjunto de propiedades, en donde las propiedades tienen asociadas un nombre y un valor*/

const persona={ //Definición del objeto persona
    //Definición de las propiedades
    nombre:"Beatriz",
    apellido:"Colón",
    edad:39,
    soltera:true,
    //Se pueden agregar objetos dentro de objetos
    contacto:{
        email:"beatriz@example.com",
        tel:"+57 1234567890"
    },
    //Se pueden agregar funciones dentro de los objetos
    saludar: function(){
        console.log("Hola! :)")
    },
    llamar: function(){
        //this nos permite hacer referencia a la instancia actual
        console.log(`llamame al ${this.contacto.tel}`)
    }
}

/*Para acceder a una propiedad del objeto se hace de la siguiente manera
nombreObjeto.nombrePropiedad*/

console.log(`Hola, mi nombre es ${persona.nombre} y mi edad es ${persona.edad}, mi correo electronico es ${persona.contacto.email}`);

//Para llamar la función dentro del objeto utilizamos el . tambien
persona.llamar();

/*Se pueden recorrer las propiedades de un objeto utilizando el ciclo for*/

console.log("-----------------Recorrer un objeto----------------------")

//For in: loop que permite recorrer las propiedades de un objeto

const mario={ //Objeto mario
    //Propiedades
    nombre:"Mario",
    apellido:"Mendoza",
    edad:42       
}

//Por cada llave en el objeto mario se imprimira la llave y el valor
for (const key in mario) {
    console.log(`Llave: ${key}, Valor: ${mario[key]}`)
}

console.log("-----------------Recorrer un objeto----------------------")


const carro ={
    Marca : "BMW",
    Modelo : "2060",
    Año : "2020",
    Color : "Azul",


    saluda1: function(){
        return `Hola mi marca es ${this.Marca} soy un modelo ${this.Modelo} año ${this.Año} y mi color es ${this.Color}`
    }
}

console.log(carro.saluda1())

let ferrari = carro;
console.log(`Propiedad marca del objecto: ${carro.Marca}`);
console.log(`Propiedad modelo del objecto: ${carro.Modelo}`);
console.log(`Propiedad año del objecto: ${carro.Año}`);
console.log(`Propiedad color del objecto: ${carro.Color}`);