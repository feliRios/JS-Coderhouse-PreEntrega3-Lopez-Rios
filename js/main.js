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


// Inicializacion de un carrito en el session storage:
// si el carrito existe (es decir, ya se ejecuto el programa), se prosigue con el programa.
// Si el carrito no existe (es decir, primera ejecucion), entonces se crea un carrito vacio


const options = document.querySelector('.options');

if (!JSON.parse(sessionStorage.getItem('carrito'))) {
    let carrito = [];
    sessionStorage.setItem('carrito', JSON.stringify(carrito));
}


class Item {
    // Clase Item del carrito. Se aplicaron operadores ternarios para evitar nulls y NaNs
    constructor(name, price, quantity) {
        this.name = name || '';
        this.price = price || 0;
        this.quantity = quantity || 0;
    }
}


// Menu principal
options.innerHTML = `
                        <ul>
                            <li>
                                <button class="option-button" id="add-item">Agregar un producto</button>
                            </li>
                            <li>
                                <button class="option-button" id="show-cart">Mostrar carrito</button>
                            </li>

                            <li>
                                <button class="option-button" id="modify-item">Modificar un item</button>
                            </li>
                            <li>
                                <button class="empty-shopping-cart option-button" id="empty-cart">VACIAR CARRITO</button>
                            </li>
                        </ul>
                    `;

// Resolucion agregar item:
let addItem = document.getElementById('add-item');
addItem.addEventListener('click', agregarItemCarrito);

// Resolucion mostrar carrito:
let showCart = document.getElementById('show-cart');
showCart.addEventListener('click', mostrarCarrito);

// Resolucion vaciar carrito:
let emptyCart = document.getElementById('empty-cart');
emptyCart.addEventListener('click', vaciarCarrito);

// Resolucion modificar item:
let modifyItem = document.getElementById('modify-item');
modifyItem.addEventListener('click', modificarItem);