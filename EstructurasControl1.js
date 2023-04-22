console.log("------------------------if/else---------------------------")
let edad=26;


if (edad>=18) { //Inicio de la condicion
    console.log("Eres mayor de edad, preparate:)") //Instruccion si se cumple
} else {
    console.log("Eres menor de edad, disfruta tu vida:)") //Instruccion si no se cumple.
}


console.log("-----------------Condicional anidada----------------------")


let hora = 19

/*Devuelve un saludo dependiendo la hora:
    -De 24 a las 05: Dejen dormir!
    -De 06 a las 11: Buenos días!
    -De 12 a las 18: Buenas tardes!
    -De 19 a las 23: Buenas noches!*/

if (hora>= 0 && hora <=5) { //Primera condición
    console.log("Dejen dormir!")
} else if(hora>=6 && hora<=11){ //Segunda condición
    console.log("Buenos días!")
} else if(hora>=12 && hora<=18){ //Tercera condición
    console.log("Buenas tardes!")
} else{
    console.log("Buenas noches!")//Instruccion si no se cumple ninguna condición
}



console.log("-----------------Operador ternario----------------------")

let ab=1,
    bb=3;

let esMayor= (ab>bb) ? `${ab} es mayor que ${bb}` : `${ab} es menor que ${bb}`
console.log(esMayor)

/*Estructura de control condicional que según una expresión evalua distintos posibles casos. Su sistaxis es:
    switch(expresion){
        case valor1:
            //instruccion
            break;
        case valor2:
            //instruccion 2
            break;
        default:
            //instruccion si ningun caso se cumple
            break;
    }
    
El siguiente ejmplo devuelve un día dependiendo un número dado
    0 Domingo
    1 Lunes
    2 Martes
    3 Miercoles
    4 Jueves
    5 Viernes
    6 Sabado*/


    console.log("-----------------switch/case----------------------")

let dia=3

switch (dia) {
    case 0:
        console.log("El día es domingo")
        break;
    case 1:
        console.log("El día es lunes")
        break;
    case 2:
        console.log("El día es martes")
        break;
    case 3:
        console.log("El día es miercoles")
        break;
    case 4:
        console.log("El día es jueves")
        break;
    case 5:
        console.log("El día es viernes")
        break;
    case 6:
        console.log("El día essabado")
        break;

    default:
        console.log("el día no existe")
        break;
}

//---------------------------------------------------------//




for(let i = 10; i >= 1; i--) {

    console.log(i);

}