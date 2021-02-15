/*  Recuperamos los valores necesarios
	para realizar las operaciones 
	y muestras de resultado necesarias.
	Esto lo hacemos mediante getElementById junto a
	addEventListener.
*/

document.getElementById("num1").addEventListener("click",num1);
document.getElementById("num2").addEventListener("click",num2);
document.getElementById("num3").addEventListener("click",num3);
document.getElementById("num4").addEventListener("click",num4);
document.getElementById("num5").addEventListener("click",num5);
document.getElementById("num6").addEventListener("click",num6);
document.getElementById("num7").addEventListener("click",num7);
document.getElementById("num8").addEventListener("click",num8);
document.getElementById("num9").addEventListener("click",num9);
document.getElementById("num0").addEventListener("click",num0);
document.getElementById("sum").addEventListener("click",op1);
document.getElementById("res").addEventListener("click",op2);
document.getElementById("div").addEventListener("click",op3);
document.getElementById("mult").addEventListener("click",op4);
document.getElementById("coma").addEventListener("click",coma);
document.getElementById("ig").addEventListener("click",muestraResultado);
document.getElementById("cientif").addEventListener("click",mensaje);
/*	Estos tres los he hecho así porque
	al intentar hacerlo como los de 
	arriba (getElementById+addEventListener)
	no me salía la suma bien.
	En vez de sumar multiplicaba el número.
*/

var sumarm = document.getElementById("sumarm");
var restarm = document.getElementById("restarm");
var almacenarm = document.getElementById("almacenarm");

//VARIABLES PARA MR,M+,M-
var condicion;
var memoria = 0;

/*	Creamos las funciones necesarias 
	para mostrar los números y realizar 
	las operaciones por pantalla
*/

//NÚMEROS(0-9)

function num0() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("num0").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado;
    console.log ( " Has elegido el número 0. " );
}

function num1() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("num1").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado;
    console.log ( " Has elegido el número 1. " );
}

function num2() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("num2").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado;
    console.log ( " Has elegido el número 2. " );
}

function num3() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("num3").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado;
    console.log ( " Has elegido el número 3. " );
}

function num4() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("num4").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado;
    console.log ( " Has elegido el número 4. " );
}

function num5() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("num5").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado;
    console.log ( " Has elegido el número 5. " );
}
function num6() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("num6").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado;
    console.log ( " Has elegido el número 6. " );
}

function num7() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("num7").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado;
    console.log ( " Has elegido el número 7. " );
}

function num8() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("num8").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado;
    console.log ( " Has elegido el número 8. " );
}

function num9() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("num9").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado;
    console.log ( " Has elegido el número 9. " );
}

//OPERACIONES BÁSICAS (+,-,*,/)

    //SUMA

function op1() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("sum").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado;
    console.log ( " Has escogido el signo + " );
}

    //RESTA

function op2() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("res").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado;
    console.log ( " Has escogido el signo - " );
}

    //DIVISIÓN

function op3() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("div").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado;
    console.log ( " Has escogido el signo / " );
}

    //MULTIPLICACIÓN

function op4() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("mult").innerHTML;
    document.getElementById('resultado').innerHTML = actual +  sumado;
    console.log ( " Has escogido el signo * " );
}

//PONER PUNTO PARA CREAR DECIMALES

function coma() {
	let actual = document.getElementById('resultado').innerHTML;
	let sumado = document.getElementById("coma").innerHTML;
    document.getElementById('resultado').innerHTML = actual + sumado;
    console.log ( "Has presionado el punto para incluir decimales." );
}

//FUNCIÓN PARA MOSTRAR RESULTADO DE OPERACIONES

function muestraResultado() {

	let actual = document.getElementById('resultado').innerHTML;
	let suma = actual.indexOf("+");
	let resta = actual.indexOf("-");
	let div = actual.indexOf("/");
    let mult = actual.indexOf("*");
	
	if (suma !== -1) {
		arr = actual.split("+",2);
		res = parseFloat(arr[0]) + parseFloat(arr[1]);
        document.getElementById("resultado").innerHTML = res;
		console.log ("El resultado de la suma es: " + res + "." );

	}
	
	 if (resta !== -1) {
		arr = actual.split("-",2);
		res = parseFloat(arr[0]) - parseFloat(arr[1]);
        document.getElementById("resultado").innerHTML = res;
        console.log("El resultado de la resta es: " + res + "." );

	}  
	
	if (div !== -1) {
		arr = actual.split("/",2);
		res = parseFloat(arr[0]) / parseFloat(arr[1]);
		document.getElementById("resultado").innerHTML = res;
        console.log("El resultado de la división es: " + res + "." );

	} 
	
	if (mult !== -1) {
		arr = actual.split("*",2);
		res = parseFloat(arr[0]) * parseFloat(arr[1]);
		document.getElementById("resultado").innerHTML = res;
		console.log("El resultado de la multiplicación es: " + res + "." );

		
    }

}

/*	EVENTOS ONCLICK PARA
	ALMACENAR,SUMAR Y RESTAR
	MEMORIA
*/

almacenarm.onclick = function(e){
	condicion = "MR";
	operarmemoria();
}

sumarm.onclick = function(e){
	condicion = "M+";
	operarmemoria();
}

restarm.onclick = function(e){
	condicion = "M-";
	operarmemoria();
}

//FUNCIÓN PARA ALMACENAR,SUMAR Y RESTAR MEMORIA

function operarmemoria(){
	switch(condicion){
		case "MR":
		resultado.textContent = memoria;
		console.log("Este es el número exitente en la memoria: " + memoria + ".");
		break;

		case "M+":
			memoria = parseFloat(memoria) + parseFloat (resultado.textContent);
			console.log("Número sumado a la memoria.");
			break;
		
		
		case "M-":
			memoria = parseFloat(memoria) - parseFloat(resultado.textContent);
			console.log("Número restado a la memoria.");
			break;
	}
}

/*===================================================================

								KEYCODE

  ===================================================================*/

 
  document.addEventListener('keydown',function(tecla) {

	//NÚMERO 0

	if( tecla.keyCode ==  48 || tecla.keyCode ==  96){
		let actual = document.getElementById('resultado').innerHTML;
		let sumado = document.getElementById("num0").innerHTML;
		document.getElementById('resultado').innerHTML = actual + sumado;
		console.log ( " Has elegido el número 0. " );
	}

	//NÚMERO 1

	if( tecla.keyCode ==  49 || tecla.keyCode ==  97){
		let actual = document.getElementById('resultado').innerHTML;
		let sumado = document.getElementById("num1").innerHTML;
		document.getElementById('resultado').innerHTML = actual + sumado;
		console.log ( " Has elegido el número 1. " );
    }
    
    //NÚMERO 2
    
	if( tecla.keyCode ==  50 || tecla.keyCode ==  98){
		let actual = document.getElementById('resultado').innerHTML;
		let sumado = document.getElementById("num2").innerHTML;
		document.getElementById('resultado').innerHTML = actual + sumado;
		console.log ( " Has elegido el número 2. " );
    }
    
    //NÚMERO 3
    
	if( tecla.keyCode ==  51 || tecla.keyCode ==  99){
		let actual = document.getElementById('resultado').innerHTML;
		let sumado = document.getElementById("num3").innerHTML;
		document.getElementById('resultado').innerHTML = actual + sumado;
		console.log ( " Has elegido el número 3. " );
    }
    
    //NÚMERO 4
    
	if( tecla.keyCode ==  52 || tecla.keyCode ==  100){
		let actual = document.getElementById('resultado').innerHTML;
		let sumado = document.getElementById("num4").innerHTML;
		document.getElementById('resultado').innerHTML = actual + sumado;
		console.log ( " Has elegido el número 4. " );
    }
    
    //NÚMERO 5
    
	if( tecla.keyCode ==  53 || tecla.keyCode ==  101){
		let actual = document.getElementById('resultado').innerHTML;
		let sumado = document.getElementById("num5").innerHTML;
		document.getElementById('resultado').innerHTML = actual + sumado;
		console.log ( " Has elegido el número 5. " );
    }
    
    //NÚMERO 6
    
	if( tecla.keyCode ==  54 || tecla.keyCode ==  102){
		let actual = document.getElementById('resultado').innerHTML;
		let sumado = document.getElementById("num6").innerHTML;
		document.getElementById('resultado').innerHTML = actual + sumado;
		console.log ( " Has elegido el número 6. " );
    }
    
    //NÚMERO 7
    
	if( tecla.keyCode ==  55 || tecla.keyCode ==  103){
		let actual = document.getElementById('resultado').innerHTML;
		let sumado = document.getElementById("num7").innerHTML;
		document.getElementById('resultado').innerHTML = actual + sumado;
		console.log ( " Has elegido el número 7. " );
    }
    
    //NÚMERO 8
    
	if( tecla.keyCode ==  56 || tecla.keyCode ==  104){
		let actual = document.getElementById('resultado').innerHTML;
		let sumado = document.getElementById("num8").innerHTML;
		document.getElementById('resultado').innerHTML = actual + sumado;
		console.log ( " Has elegido el número 8. " );
    }
    
    //NÚMERO 9
    
	if( tecla.keyCode ==  57 || tecla.keyCode ==  105){
		let actual = document.getElementById('resultado').innerHTML;
		let sumado = document.getElementById("num9").innerHTML;
		document.getElementById('resultado').innerHTML = actual + sumado;
		console.log ( " Has elegido el número 9. " );
    }
    
    //SIGNO +
    
	if( tecla.keyCode == 107 ){
		let actual = document.getElementById('resultado').innerHTML;
		let sumado = document.getElementById("sum").innerHTML;
        document.getElementById('resultado').innerHTML = actual + sumado;
        console.log ( " Has escogido el signo + " );
    }
    
    //SIGNO -
    
	if( tecla.keyCode == 109 ){
		let actual = document.getElementById('resultado').innerHTML;
		let sumado = document.getElementById("res").innerHTML;
        document.getElementById('resultado').innerHTML = actual + sumado;
        console.log ( " Has escogido el signo - " );
    }
    
    //SIGNO *
    
	if( tecla.keyCode == 106 ){
		let actual = document.getElementById('resultado').innerHTML;
		let sumado = document.getElementById("mult").innerHTML;
        document.getElementById('resultado').innerHTML = actual + sumado;
        console.log ( " Has escogido el signo * " );
    }
    
    //SIGNO /
    
	if( tecla.keyCode == 111 ){
		let actual = document.getElementById('resultado').innerHTML;
		let sumado = document.getElementById("div").innerHTML;
        document.getElementById('resultado').innerHTML = actual + sumado;
        console.log ( " Has escogido el signo / " );
	}

    //PUNTO
    
	if( tecla.keyCode ==  110 || tecla.keyCode ==  190){
		let actual = document.getElementById('resultado').innerHTML;
		let sumado = document.getElementById("coma").innerHTML;
		document.getElementById('resultado').innerHTML = actual + sumado;
		console.log ( " Has presionado el punto para incluir decimales." );
	}

});

//LIMPIAR PANTALLA.

function limpiar() {
    document.getElementById("resultado").innerHTML = "";
	//Mandamos mensaje informativo.
    console.log("La operación ha sido borrada de la pantalla.");
}

//LIMPIAR CONSOLA.

function limpiarc(){
    //Informamos sobre la limpieza de consola.
    console.clear();
}

/*===============================================================================

                            OPERACIONES AVANZADAS

  =============================================================================== */

//PI

function pi(){
    let pi = Math.PI;
    let actual = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = pi;
    console.log("El valor de π es: " + (pi) + "." );
}

//SENO

function sin(){
    let pantalla = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = Math.sin(pantalla);
    console.log("El seno del número " + pantalla + " es: " + Math.sin(pantalla) + "." );
}

//COSENO

function cos(){
    let actual = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = Math.cos(actual);
    console.log("El coseno del número " + actual + " es: " + Math.cos(actual) + "." );
}

//TANGENTE

function tan(){
    let actual = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = Math.tan(actual);
    console.log("La tangente del número " + actual + " es: " + Math.tan(actual) + "." );
}

//ARCOSENO

function arcsin(){
    let actual = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = Math.asin(actual);
    console.log("El arcoseno del número " + actual + " es: " + Math.asin(actual) + "." );
}

//ARCOCOSENO

function arcocos(){
    let actual = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = Math.acos(actual);
    console.log("El arcocoseno del número " + actual + " es: " + Math.acos(actual) + "." );
}

//ARCOTANGENTE

function arcotan(){
    let actual = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = Math.atan(actual);
    console.log("El arcotangente del número " + actual + " es: " + Math.atan(actual) + "." );
}

//COSENO HIPERBÓLICO

function cosh(){
    let actual = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = Math.cosh(actual);
    console.log("El coseno hiperbólico del número " + actual + " es: " 
                + Math.cosh(actual) + "." );
}

//ARCOCOSENO HIPÉRBOLICO

function coshm(){
    let actual = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = Math.acosh(actual);
    console.log("El arcocoseno hiperbólico del número " + actual + " es: "
                + Math.acosh(actual) + "." );
}

//SENO HIPÉRBOLICO

function senh(){
    let actual = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = Math.sinh(actual);
    console.log("El seno hiperbólico del número " + actual + " es: " 
                + Math.sinh(actual) + "." );
}

//ARCOSENO HIPERBÓLICO

function senhm(){
    let actual = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = Math.asinh(actual);
    console.log("El arcoseno hiperbólico del número " + actual + " es: " 
                + Math.asinh(actual) + "." );
}

//TANGENTE HIPÉRBOLICA

function tanh(){
    let actual = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = Math.tanh(actual);
    console.log("La tangente hiperbólica del número " + actual + " es: " 
                + Math.tanh(actual) + "." );
}

//ARCOTANGENTE HIPERBÓLICA

function tanhm(){
    let actual = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = Math.atanh(actual);
    console.log("La arcotangente hiperbólica del número " + actual + " es: " 
                + Math.atanh(actual) + "." );
}

//LOGARITMO

function log(){
    let actual = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = Math.log(actual);
    console.log("El logaritmo del número " + actual + " es: " + Math.log(actual) + "." );
}

//LOGARITMO EN BASE DOS

function logdos(){
    let actual = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = Math.log2(actual);
    console.log("El logaritmo en base dos del número " + actual + " es: " 
                + Math.log2(actual) + "." );
}

//RAÍZ CUADRADA

function raiz(){
    let actual = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = Math.sqrt(actual);
    console.log("La raíz cuadrada del número " + actual + " es: " 
                + Math.sqrt(actual) + "." );
}

//RAÍZ CÚBICA

function raizcub(){
    let actual = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = Math.cbrt(actual);
    console.log("La raíz cúbica del número " + actual + " es: " 
                + Math.cbrt(actual) + "." );
}

//REDONDEAR

function round(){
    let actual = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = Math.round(actual);
    console.log("El resultado de redondear el número es: " 
                + Math.round(actual) + "." );
}

//NÚMERO ALEATORIO ENTRE 0 Y 1

function aleat(){
    let actual = document.getElementById('resultado').innerHTML;
    aleatorio = Math.random(actual);
    document.getElementById("resultado").innerHTML = aleatorio ;
    console.log("El número aletorio generado es: " + aleatorio + "." );
}

//TRUNCAR

function trunc(){
    let actual = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = Math.trunc(actual);
    console.log("El resultado de truncar el número es: " + Math.trunc(actual) + "." );
}


//AVISAMOS EL CAMBIO DE CALCULADORA.

function mensaje(){
    alert("¿List@ para dirigirte a la calculadora básica?");
}