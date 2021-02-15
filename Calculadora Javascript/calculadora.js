
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

//NÚMEROS (0-9)

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
    console.log ( " Has presionado el punto para incluir decimales." );
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
		console.log ("El resultado de la suma es: " + res + ".");
		
	}
	
	if (resta !== -1) {
		arr = actual.split("-",2);
		res = parseFloat(arr[0]) - parseFloat(arr[1]);
        document.getElementById("resultado").innerHTML = res;
        console.log("El resultado de la resta es: " + res + ".");

	}  
	
	if (div !== -1) {
		arr = actual.split("/",2);
		res = parseFloat(arr[0]) / parseFloat(arr[1]);
		document.getElementById("resultado").innerHTML = res;
        console.log("El resultado de la división es: " + res + ".");
		
	} 
	
	if (mult !== -1) {
		arr = actual.split("*",2);
		res = parseFloat(arr[0]) * parseFloat(arr[1]);
		document.getElementById("resultado").innerHTML = res;
		console.log("El resultado de la multiplicación es: " + res + ".");

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

//AVISAMOS EL CAMBIO DE CALCULADORA.

function mensaje(){
	alert("¿List@ para dirigirte a la calculadora científica?");
}

