function mostrarCarrito() {
    // Esta funcion muestra el contenido actual del carrito
    let carritoJSON = sessionStorage.getItem('carrito');
    carrito = JSON.parse(carritoJSON);
    precioFinal = carrito.reduce((total, producto) => { return total + (producto.price * producto.quantity) }, 0);
    let lineas = carrito.map((producto) => { return `<li>Producto: ${producto.name}, precio: ${producto.price}, cantidad: ${producto.quantity}</li>` })

    if (carrito.length) {
        options.innerHTML = `
                            <p>Total items: </p>
                            <ul>
                                ${lineas}
                            </ul>
                            <p>TOTAL DEL CARRITO: ARS${precioFinal}</p>
                            <form action="">
                                <input type="submit" value="VOLVER">
                            </form>
                            `;
    } else {
        options.innerHTML = `
                            <form action="">
                                <p>Su carrito se encuentra vacio</p>
                                <input type="submit" value="VOLVER">
                            </form>
                            `;
    }
}