function agregarItemCarrito() {
    // Esta funcion agrega un Item al carrito
    options.innerHTML = `
                            <form id="product-send-form" action="">
                                <input id="product-name" type="text" placeholder="Nombre del producto" required>
                                <input id="product-value" type="number" placeholder="Precio del producto" required>
                                <input id="product-quantity" type="number" placeholder="Cantidad de unidades de producto" required>
                                <input type="submit">
                            </form>
                        `
    
    let enviarForm = document.getElementById('product-send-form');
    enviarForm.addEventListener('submit', (e) => {
        // Escuchador de evento para cargar el item en el carrito
        e.preventDefault();
        let nombreProducto = document.getElementById('product-name').value;
        let valorProducto = document.getElementById('product-value').value;
        let cantidadProducto = document.getElementById('product-quantity').value;

        if (nombreProducto && valorProducto && cantidadProducto) {
            const producto = new Item(nombreProducto, valorProducto, cantidadProducto);
            
            const carritoJSON = sessionStorage.getItem('carrito');
            carrito = JSON.parse(carritoJSON);
            carrito.push(producto);
            sessionStorage.setItem('carrito', JSON.stringify(carrito));
            options.innerHTML = `
                                <form action="">
                                    <p>Producto agregado correctamente.</p>
                                    <input type="submit" value="VOLVER">
                                </form>
                            `
        } else {
            options.innerHTML = `
                                <form action="">
                                    <p>Debes completar todos los campos.</p>
                                    <input type="submit" value="VOLVER">
                                </form>
                                `
        }
    })
}