const nombre = prompt("Hola! Bienvenido a Sneaker House, ingresa tu nombre");
let sexo;

if (nombre) {
  sexo = prompt(
    "Hola " + nombre + " ¿Eres hombre o mujer? Ingresa M o H"
  );

  if (sexo === "M") {
    alert("Bienvenida " + nombre + " !");
  } else if (sexo === "H") {
    alert("Bienvenido " + nombre + " !");
  } else {
    alert("Entrada inválida. Por favor intenta de nuevo.");
  }
} else {
  alert("Por favor, ingresa tu nombre.");
}

function sorteo() {
  if (!nombre || !sexo) {
    alert("Por favor, ingresa tu nombre y género antes de jugar.");
    return;
  }

  let numeroElegido = 4;
  let intentos = 0;

  alert("Tienes 3 intentos para adivinar un número del 1 al 10 y recibir una sorpresa de SneakeHouse!");

  while (intentos < 3) {
    const numeroUsuario = parseInt(prompt("Ingresa un número del 1 al 10:"));
    if (numeroUsuario === numeroElegido) {
      alert("¡Felicidades, acertaste! Ganaste un 20% de descuento en nuestra tienda virtual.");
      break;
    } else {
      intentos++;
      alert("Número incorrecto. Te quedan " + (3 - intentos) + " intentos.");
    }
  }

  if (intentos === 3) {
    alert("Lo sentimos, se agotaron tus intentos. Sigue participando.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let botonsorteo = document.getElementById("sorteo");
  botonsorteo.addEventListener("click", sorteo);
});

function Zapatilla(marca,talle,modelo){
  this.marca=marca;
  this.talle=talle;
  this.modelo=modelo;
}
function ingresarZapatillas() {
  const zapatillas = [];
  let continuar = true;

  while (continuar) {
    const marca = prompt("Ingrese que marca es la zapatilla que queres vender");
    const talle = prompt("Ingrese el talle de la zapatilal que queres vender");
    const modelo = prompt("Ingrese el modelo de la zapatilla que queres vender");

    const nuevaZapatilla = new Zapatilla(marca, talle, modelo);
    zapatillas.push(nuevaZapatilla);

    const respuesta = prompt("¿Desea ingresar otra Zapatilla? (Sí/No)").toLowerCase();

    if (respuesta !== "si") {
      continuar = false;
    }
  }

  localStorage.setItem("Zapatilla", JSON.stringify(zapatillas));
  const zapatillasenJSON=JSON .stringify(zapatillas)
  console.log("Zapatillas ingresadas"+zapatillasenJSON)
  return zapatillas;

}

document.addEventListener("DOMContentLoaded",function(){
  let botonVenderZapatillas=document.getElementById("venta");
  botonVenderZapatillas.addEventListener("click",ingresarZapatillas)
})


