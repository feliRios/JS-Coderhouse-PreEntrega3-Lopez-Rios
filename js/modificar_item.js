function modificarItem() {
    // Esta funcion permite modificar un item del carrito, como modificar su precio o cantidad

    let carritoJSON = sessionStorage.getItem('carrito');
    carrito = JSON.parse(carritoJSON);

    if (carrito.length) {
 
        let inputLine = carrito.map((producto) => { return `<label for="product-${producto.name.split(' ').join('')}">${producto.name}</label><input type="radio" id="product-${producto.name.split(' ').join('')}" name="product" value="${producto.name}">` })
        // Lo que logro con .split(' ').join('') es eliminar los espacios en blanco del string

        options.innerHTML = `
                            <form id="modify-item-form" action="">
                                <p>¿Qué producto deseas modificar?</p>
                                ${inputLine}
                                <input type="submit" value="SELECCIONAR">
                            </form>
                        `
        
        let enviarForm = document.getElementById('modify-item-form');
        enviarForm.addEventListener('submit', (e) => {
            // Escuchador de evento para modificar un item del carrito
            e.preventDefault();

            if (document.querySelector('input[name="product"]:checked')) {
                let nameProductToModify = document.querySelector('input[name="product"]:checked').value;

                // Metodo de filtrado que me retorna el objeto con la propiedad name coincidente
                let ProductToModify = carrito.find((elemento) => { return elemento.name == nameProductToModify && elemento.name })

                options.innerHTML = `
                                <form id="modify-item-form" action="">
                                    <p>Seleccionaste <strong>${nameProductToModify}</strong>.</p>
                                    <label for="modify-price">Precio</label>
                                    <input id="modify-price" type="number" value="${ProductToModify.price}">
                                    <label for="modify-quantity">Cantidad</label>
                                    <input id="modify-quantity" type="number" value="${ProductToModify.quantity}">
                                    <input type="submit" value="MODIFICAR">
                                </form>
                            `
                
                enviarForm = document.getElementById('modify-item-form');
                enviarForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    ProductToModify.price = document.getElementById('modify-price').value;
                    ProductToModify.quantity = document.getElementById('modify-quantity').value;
                    carritoJSON = JSON.stringify(carrito);
                    sessionStorage.setItem('carrito', carritoJSON);
                    options.innerHTML = `
                                <form action="">
                                    <p>Producto modificado correctamente.</p>
                                    <input type="submit" value="VOLVER">
                                </form>
                                `
                });
            } else {
                options.innerHTML = `
                                <form action="">
                                    <p>Debes seleccionar una opcion</p>
                                    <input type="submit" value="VOLVER">
                                </form>
                                `
            }
        });
    } else {
        options.innerHTML = `
                            <p>Su carrito se encuentra vacio</p>
                            <form action="">
                                <input type="submit" value="VOLVER">
                            </form>
                            `
    }
}