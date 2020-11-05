// Crear un programa que pida al usuario ingresar el nombre de una playlist y cuántas canciones desea agregar a la misma. Luego debe ir pidiendo agregar la cantidad de canciones elegidas de a una. Se debe ir mostrando la cantidad de canciones que quedan por agregar y la playlist con los temas hasta el momento a medida que se va a actualizando. Al finalizar mostrar un mensaje con el nombre de la playlist y la lista de canciones.

const playlist = (name, cant) => {
  let list = [];
  for (i = 0; i < cant; i++) {
    list.push(prompt("Ingresar Canción " + (i + 1) + " de " + cant));

    console.log(name, list);
  }
};

const nombre = prompt("Ingresar el nombre de la playlist");
const cant = prompt("Cuantas canciones desea ingresar?");

playlist(nombre, cant);
