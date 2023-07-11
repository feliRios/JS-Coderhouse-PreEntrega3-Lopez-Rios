function vaciarCarrito() {
    // Esta funcion vacía el carrito
    let carritoJSON = sessionStorage.getItem('carrito');
    carrito = JSON.parse(carritoJSON);

    if (carrito.length != 0) {
        options.innerHTML = `
                            <form id="empty-cart-form" action="">
                                <span>¿Estás seguro que deseas vaciar el carrito?</span>
                                <label for="empty-yes">Si</label>
                                <input id="empty-yes" type="radio" name="emptybutton" value="yes">
                                <label for="empty-no">No</label>
                                <input id="empty-no" type="radio" name="emptybutton" value="no">
                                <input type="submit" value="CONFIRMAR">
                            </form>
                        `

        let enviarForm = document.getElementById('empty-cart-form');
        enviarForm.addEventListener('submit', (e) => {
            // Escuchador de evento para vaciar el carrito

            if (document.querySelector('input[name="emptybutton"]:checked')) {
                let emptyButtons = document.querySelector('input[name="emptybutton"]:checked').value;

                if (emptyButtons == "yes") {
                    e.preventDefault();
                    carrito.splice(0);
                    carritoJSON = JSON.stringify(carrito);
                    sessionStorage.setItem('carrito', carritoJSON);
                    options.innerHTML = `
                                        <p>Carrito vaciado correctamente.</p>
                                        <form action="">
                                            <input type="submit" value="VOLVER">
                                        </form>
                                    `
                    console.log("Vaciar carrito: el usuario vacio el carrito.");
                } else {
                    console.log("Vaciar carrito: el usuario ingreso 'no' o un input no valido.");
                }
            } else {
                options.innerHTML = `
                                <form action="">
                                    <p>Debes seleccionar una opcion</p>
                                    <input type="submit" value="VOLVER">
                                </form>
                                `
            }
        })
    } else {
        options.innerHTML = `
                            <p>Su carrito ya se encuentra vacio</p>
                            <form action="">
                                <input type="submit" value="VOLVER">
                            </form>
                        `
    }
}