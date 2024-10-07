var nombre = prompt ("¿Cual es tu nombre?");
var edad = prompt ("¿Cual es tu edad?") ;
var estudiante = true;

console.log(nombre);
console.log(edad);
console.log(estudiante);

let mensaje = `¡Hola, soy ${nombre} y tengo ${edad} años!`;
console.log(mensaje);

if (estudiante >= true) {alert ("Gadiel si estudiaste! Pasaras la materia!")} 
else { alert ("Gadiel no estudiaste! Reprobaras la materia!")}