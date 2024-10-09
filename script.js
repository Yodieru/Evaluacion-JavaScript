var nombre = prompt ("¿Cual es tu nombre?");
var edad = prompt ("¿Cual es tu edad?") ;
var estudiaste = true;

console.log(nombre);
console.log(edad);
console.log(estudiaste);

let mensaje = `¡Hola, soy ${nombre} y tengo ${edad} años!`;
console.log(mensaje);

if (estudiaste >= true) {alert (nombre + "si estudiaste! Pasaras la materia!")} 
else { alert (nombre + "no estudiaste! Reprobaras la materia!")} 