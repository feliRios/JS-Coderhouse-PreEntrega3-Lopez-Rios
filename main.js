// PRIMERA PRE ENTREGA DEL PROYECTO FINAL
// - CREAR UN ALGORITMO CON UN CONDICIONAL
// - CREAR UN ALGORITMO UTILIZANDO UN CICLO
// - ARMAR UN SIMULADOR INTERACTIVO: CARRITO DE COMPRAS

let total = 0.0;
let menuDecision;  // Variable para el ciclo do-while

function agregarItemCarrito(precio, cantidad) {
    // Esta funcion agrega "items" al carrito, incluyendo precio y cantidad
    console.log("El usuario agrega " + cantidad + " productos de $" + precio);
    total += precio * cantidad;
}

function vaciarCarrito() {
    // Esta funcion vacía el carrito
    let vaciarDecision = prompt("Estas seguro que deseas vaciar el carrito? (si/no): ");
    if (vaciarDecision == "si") {
        total = 0;
        alert("Carrito vaciado con exito.");
        console.log("Vaciar carrito: el usuario vacio el carrito.");
    } else {
        console.log("Vaciar carrito: el usuario ingreso 'no' o un input no valido.");
    }
}

function mostrarCarrito() {
    // Esta funcion muestra el contenido actual del carrito (precio total)
    alert("El total del carrito es de $" + total);
}

function calcularCuotas() {
    // Esta funcion permite calcular el valor total del carrito en caso de que
    // el usuario precise un pago en cuotas (en este caso con interes)
    // 6 cuotas -> 15% interes
    // 12 cuotas -> 20% interes
    // 18 cuotas -> 22% interes
    let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas que desea estimar:\n 6 cuotas -> 15% interes\n 12 cuotas -> 20% interes\n 18 cuotas -> 22% interes"));
    let valorCuota = total / cuotas;
    let valorCuotaConInteres, valorTotal;

    switch (cuotas) {
    case 6:
      valorCuotaConInteres = valorCuota * 1.15;
      valorTotal = valorCuotaConInteres * 6;
      alert("El valor del carrito en 6 cuotas es de un total de $" + valorTotal + " (6 cuotas de $" + valorCuotaConInteres + ")");
      break;

    case 12:
      valorCuotaConInteres = valorCuota * 1.20;
      valorTotal = valorCuotaConInteres * 12;
      alert("El valor del carrito en 12 cuotas es de un total de $" + valorTotal + " (12 cuotas de $" + valorCuotaConInteres + ")");
      break;

    case 18:
      valorCuotaConInteres = valorCuota * 1.22;
      valorTotal = valorCuotaConInteres * 18;
      alert("El valor del carrito en 18 cuotas es de un total de $" + valorTotal + " (18 cuotas de $" + valorCuotaConInteres + ")");
      break;

    default:
      alert("Opcion invalida. Por favor, seleccione una opcion valida.");
  }
}

do {
    // La logica del menu
    menuDecision = prompt("Elija alguna de las siguientes opciones:\n (1) Agregar productos al carrito\n (2) Mostrar el carrito\n (3) Calcular carrito en cuotas\n (4) Vaciar el carrito\n (5) Finalizar el programa");
    switch (menuDecision) {
        case '1':
            let precio = parseFloat(prompt("Ingrese el valor del producto: "));
            let cantidad = parseInt(prompt("Ingrese la cantidad de productos: "));
            agregarItemCarrito(precio, cantidad);
            break;
    
        case '2':
            mostrarCarrito();
            break;

        case '3':
            calcularCuotas();
            break;
        
        case '4':
            vaciarCarrito();
            break;
        
        case '5':
            break;
        
        default:
            alert("Por favor, seleccione una opcion valida (evite espacios y/o numeros fuera del rango)");
    }

} while (menuDecision != 5);