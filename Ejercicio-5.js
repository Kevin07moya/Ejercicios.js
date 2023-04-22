console.log("----------------------------------Asignaciones--------------------------------")
let x =12;
let z = 16;

console.log(`El valor de x es ${x} y el valor de z es ${z}`);

x++; 
z--;
console.log(`El valor de x incremetado es ${x} y de z con decremento ${z}`); 

let valorUno = true;
let valorDos = false;

//negacion

console.log("Negación.", !valorDos)

//and 

console.log("AND", (valorUno && valorDos ))

//or

console.log("OR", (valorUno || valorDos))

//operadores matematicos

let a = 9;
let b = 56;

let suma = a + b,
    resta = a - b,
    multiplicacion = a * b,
    division = a / b;

    console.log(`EL valor de la suma es ${suma}
    El valor de la resta es ${resta}
    El valor de la multiplicacion es ${multiplicacion}
    El valor de la division es ${division}`);

let mayor = a>b,
    menor = a<b,
    mayorIgual = a>=b,
    menorIgual = a<=b,
    igual = a==b,
    distinto = a!=b

    console.log(`La variable ${a} es mayor que ${b}: ${mayor}
    La variable ${a} es menor que ${b}: ${menor}
    La variable ${a} es mayor o igual que ${b}: ${mayorIgual}
    La variable ${a} es menor o igual que ${b}: ${menorIgual}
    La variable ${a} es igual que ${b}: ${igual}
    La variable ${a} es distinta que ${b}: ${distinto}`)


let num1 = 5, num2 = 32, num3 = -12;

let op1 = (num1 * num2)/num3,
    op2 = (num2 + num3)*num1,
    op3 = (num1 / num2)-(num1 + num3)

    console.log(`EL resultado de la operacion 1 es ${op1}`)
    console.log(`EL resultado de la operacion 2 es ${op2}`)
    console.log(`EL resultado de la operacion 3 es ${op3}`)

let modulo = a % b 

console.log(`EL resultado del modulo entre ${a} y ${b} es ${modulo}`)


let incremento2 = 5;

incremento2 ++;

console.log(incremento2+=2)
