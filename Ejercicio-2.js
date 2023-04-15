var pelicula="interestelar"
console.log("variable pelicula antes del bloque:", pelicula);

let musica = "Rock";
console.log("variable musica antes del bloque:", musica);

{
    var pelicula = "Matilda";
    console.log("variable pelicula antes del bloque:", pelicula);

    let musica = "Salsa";
    console.log("variable musica antes del bloque:", musica);

}

console.log("variable pelicula antes del bloque:", pelicula);
console.log("variable musica antes del  bloque:", musica);

var nombre = "Pepito";
var apellido = "Perez";

let edad = "38";
let comida = "pizza";

{
    var nombre = "Fulano";
    let apellido = "de tal";
    let edad = "40";
    let comida = "hamburguesa";

    console.log("la variable global se puede leer aqui", nombre);
    console.log("la variable global se puede leer aqui", apellido);
    console.log("la variable global se puede leer aqui", edad);
    console.log("la variable global se puede leer aqui", comida);

}
console.log("la variable global se puede leer aqui", nombre);
console.log("la variable global se puede leer aqui", apellido);
console.log("la variable global se puede leer aqui", edad);
console.log("la variable global se puede leer aqui", comida);