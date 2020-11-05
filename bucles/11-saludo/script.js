// Crear un programa que pida ingresar un nombre, pregunta si el nombre es correcto, y si lo es, muestre un mensaje saludando a la persona con dicho nombre. La función prompt devuelve el texto ingresado por el usuario

const nombre = prompt("Por favor, ingresá tu nombre");
const respuesta = confirm("¿Estás segura que te llamás así?");

if (respuesta) {
  alert(`¡Hola ${nombre}!`);
}
