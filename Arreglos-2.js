/*Existen metodos y propiedades que hacen que trabajar con arreglos sea más sencillo*/

//Crea una arreglo de 100 posiciones con el valor de false
console.log("-----------------Array(n).fill()----------------------")
const a= Array(100).fill(false) 
console.log(a)

const colores =["Rojo", "Azul", "Gris"]
console.log(colores)

//Con el método push() se agrega un elemento en la ultima posicion del arreglo.

console.log("-----------------push()----------------------")
colores.push("Verde")
console.log(colores)

//Con el método pop() se elimina el ultimo elemento del arreglo.
console.log("-----------------pop()----------------------")
colores.pop()
console.log(colores)

//Con el metodo slice() se crea una copia del arreglo

console.log("-----------------slice()----------------------")
const copiaColores =colores.slice();
console.log(copiaColores)

//La propiedad lenght obtiene el tamaño del arreglo.

console.log("-----------------lenght----------------------")
console.log(colores.length)

console.log("-----------------Practica----------------------")

let array = [];

for (let i = 0; i < 100; i++) {
    array.push(i + 1);
}
console.log(array)

function llenarArray(limite){
    return Array.from({length: limite}, (_, indice) => indice + 1);

}
console.table(llenarArray(100));

//-----------------------------------------------------------------

let array1 = [];

for (let i = 1 ; i <= 100; i++){
    if(i % 2 === 0){
        
         array1.push(i)
    }
    else{
       // console.log("no es par");

    }

    console.log(array1)

}