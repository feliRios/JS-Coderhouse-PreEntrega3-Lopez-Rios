// TERCERA PRE ENTREGA DEL PROYECTO FINAL
// - Codificar funciones de procesos esenciales y notificación de resultados 
//   por HTML, añadiendo interacción al simulador.
// - Ampliar y refinar el flujo de trabajo del script en términos de captura 
//   de eventos, procesamiento del simulador y notificación de resultados en 
//   forma de salidas por HTML, modificando el DOM.
// - Definir eventos a manejar y su función de respuesta.
// - Modificar el DOM, ya sea para definir elementos al cargar la página o para 
//   realizar salidas de un procesamiento.
// - Almacenar datos (clave-valor) en el Storage y recuperarlos

let menuDecision;  // Variable para el ciclo do-while

const carrito = [];


class Item {
    constructor(name, price, quantity) {
        this.name = name || '';
        this.price = price || 0;
        this.quantity = quantity || 0;
    }
}


function agregarItemCarrito(nombre, precio, cantidad) {
    // Esta funcion agrega un Item al carrito
    console.log(`El usuario agrega ${cantidad} unidades de '${nombre}', de ARS${precio} cada uno.`);
    producto = new Item(nombre, precio, cantidad);
    carrito.push(producto);
}


function mostrarCarrito() {
    // Esta funcion muestra el contenido actual del carrito
    precioFinal = carrito.reduce((total, producto) => { return total + (producto.price * producto.quantity) }, 0);
    let lineas = carrito.map((producto) => { return `Producto: ${producto.name}, precio: ${producto.price}, cantidad: ${producto.quantity}` })
    let todosItems = `- ${lineas.join('\n- ')}`

    // if (carrito.length) {
    //     alert(`Su carrito:\n${todosItems}\nTotal del carrito: ARS${precioFinal}`);
    // } else {
    //     alert('Su carrito se encuentra vacio.')
    // }

    carrito.length ? alert(`Su carrito:\n${todosItems}\nTotal del carrito: ARS${precioFinal}`) : alert('Su carrito se encuentra vacio.')
}


function vaciarCarrito() {
    // Esta funcion vacía el carrito
    let vaciarDecision = prompt("Estas seguro que deseas vaciar el carrito? (si/no): ");
    if (vaciarDecision == "si") {
        carrito.splice(0);
        alert("Carrito vaciado con exito.");
        console.log("Vaciar carrito: el usuario vacio el carrito.");
    } else {
        console.log("Vaciar carrito: el usuario ingreso 'no' o un input no valido.");
    }
}


function modificarItem() {
    // Esta funcion permite modificar un item del carrito, como modificar su precio o cantidad
    if (carrito.length) {
        let lineas = carrito.map((producto) => { return `Producto: ${producto.name}, precio: ${producto.price}, cantidad: ${producto.quantity}` })
        let todosItems = `- ${lineas.join('\n- ')}`
        let modifDecision = prompt(
            `Qué producto deseas modificar?:\n${todosItems}\n(Ingrese el nombre del producto, o 0 para abortar)`
        )
        
        if (modifDecision != '0') {
            let con = false;  // Variable bandera: en caso de que no haya coincidencias, imprime lo correspondiente
            for (const producto of carrito) {
                if (producto.name == modifDecision) {
                    con = true;
                    
                    switch (prompt(
                        `Seleccionaste '${producto.name}'. Que deseas modificar?\n(1) Precio\n(2) Cantidad\n(3) Abortar`
                    )) {
                        case '1':
                            let nuevoPrecio = parseFloat(prompt(`Ingrese el nuevo valor del producto (valor actual: ARS${producto.price})`));
                            let indicePrecio = carrito.findIndex((productoFindIndex) => { return productoFindIndex.name === modifDecision });

                            if (isNaN(nuevoPrecio)) {
                                alert('Ingresaste una entrada invalida. Asegurate de escribir un valor numerico')
                            } else {
                                carrito[indicePrecio].price = nuevoPrecio;
                            }

                            break;
                    
                        case '2':
                            let nuevaCantidad = parseInt(prompt(`Ingrese la nueva cantidad de productos (cantidad actual: ${producto.quantity} productos)`));
                            let indiceCantidad = carrito.findIndex((productoFindIndex) => { return productoFindIndex.name === modifDecision });

                            // if (isNaN(nuevaCantidad)) {
                            //     alert('Ingresaste una entrada invalida. Asegurate de escribir un valor numerico.')
                            // } else {
                            //     carrito[indiceCantidad].quantity = nuevaCantidad;
                            // }

                            isNaN(nuevaCantidad) ? alert('Ingresaste una entrada invalida. Asegurate de escribir un valor numerico.') : carrito[indiceCantidad].quantity = nuevaCantidad

                            break;
                        
                        case '3':
                            break;
                        
                        default:
                            alert('Ingresaste una opcion invalida.')
                            break;
                    }

                } 
            }
            // if (!con) {
            //     alert('Ingresaste una opcion invalida. Asegurate de escribir el nombre del producto correctamente')

            !con && alert('Ingresaste una opcion invalida. Asegurate de escribir el nombre del producto correctamente');

        }

    } else {
        alert('Su carrito se encuentra vacio.')
    }
}


function calcularCuotas() {
    // Esta funcion permite calcular el valor total del carrito en caso de que
    // el usuario precise un pago en cuotas (en este caso con interes)
    // 6 cuotas -> 15% interes
    // 12 cuotas -> 20% interes
    // 18 cuotas -> 22% interes
    let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas que desea estimar:\n 6 cuotas -> 15% interes\n 12 cuotas -> 20% interes\n 18 cuotas -> 22% interes"));
    let total = carrito.reduce((total, producto) => { return total + (producto.price * producto.quantity) }, 0);
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

// La logica del menu
do {
    menuDecision = prompt("Elija alguna de las siguientes opciones:\n (1) Agregar productos al carrito\n (2) Mostrar el carrito\n (3) Calcular carrito en cuotas\n (4) Vaciar el carrito\n (5) Modificar un item\n (6) Finalizar el programa");
    switch (menuDecision) {
        case '1':
            let nombre = prompt("Ingrese el nombre del producto: ")
            let precio = parseFloat(prompt("Ingrese el valor del producto: "));
            let cantidad = parseInt(prompt("Ingrese la cantidad de productos: "));
            agregarItemCarrito(nombre, precio, cantidad);
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
            modificarItem();
        
        case '6':
            break;
        
        default:
            alert("Por favor, seleccione una opcion valida (evite espacios y/o numeros fuera del rango)");
    }

} while (menuDecision != 6);