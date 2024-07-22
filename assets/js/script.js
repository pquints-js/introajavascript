console.log("Hola, empezando con JS");

/* declaracion */
var cadena1;

/* inicializar */
cadena1="dato de ejemplo";

/* invocar */
console.log(cadena1);

/* reasignar */
cadena1="Nuevo dato";

/* declarar e inicializar */
var cadena2 = "Declarada e inicializada en un solo paso";

/* tipo de dato */
/* entero, decimal, logico, cadena de caracteres */
/* integer, float, boolean, string */
/* debilmente tipado js-python*/

var entero;
entero = 5;
entero = "cadena de caracteres";

/* en un banco */
/* funcion que permite realizar transacciones entre cuentas */
var montoIngresado = 10000;  /* si lo ponemos en comillas concatenan y estariamos cagados */
var saldo = 10000;
saldo = saldo + montoIngresado; // 20000

/* define tipo de dato */
var cadenaCaracteres = "definiendo una variable como String";
var numeroEntero = 456;
var numeroDecimal = 5.4;
var booleanUno = true;
var booleanDos = false;
var booleanOperacion = 5 == 4;


/* Operarla */
/* Operadores */
/* Aritmeticos */
/* + - / x */
/* suma, restas, multiplicacion, division, modulo(resto) */
/* Modulo */
/* 2 / 2 = 1 
    |0*/
/* 3 / 2 = 1 
    |1*/

/* Logicos operando 2 valores daran da igual como sea sera 1 booleano*/
/*  == != === !== <> <= >= */
console.log(4 == 5); //false
console.log(4 != 5); //true
console.log(4 < 5); //true
console.log(4 >= 5); //false
console.log(4 <= 5); //true
console.log(5 > 5); //false
console.log("2" == 2); //true
console.log("2" === 2); //false

/* Cadena de caracteres */
/* +; concatenar */
var datoIncrustar = 'ESTE ES EL DATO QUE PUEDE CAMBIAR'
var cadenaDinamica = 'Cadena con un dato que cambia segun valor de la variable' + datoIncrustar
console.log(cadenaDinamica);

Interpolacion 
var cadenaInterpolacion = `Cadena con un dato que cambia segun de la variable ${datoIncrustar}`;
console.log(cadenaInterpolacion);

/* Ejemplo de diferencia entre concatenar e interpolar */
var numeroUno = 5;
var numeroDos = 7;
var suma = numeroUno + numeroDos;

/* Concatenacion */
var mensaje = 'El resultado de la suma de' + numeroUno + '+' + numeroDos + '=' + suma;
console.log(mensaje);

/* Interpolacion  */
mensaje = `el resultado de la suma de ${numeroUno} + ${numeroDos} = ${suma}`;
console.log(mensaje);



/* funciones preescritas 
alert();
prompt();
parseFloat();
parseInt();
document.getElementById(); */