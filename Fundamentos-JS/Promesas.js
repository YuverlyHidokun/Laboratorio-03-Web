
let carrito = [];


function agregarAlCarrito(producto, precio, cantidad = 1) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const indice = carrito.findIndex(item => item.producto === producto);

            if (indice !== -1) {
                carrito[indice].cantidad += cantidad;
            } else {
                carrito.push({ producto, precio, cantidad });
            }

            resolve(`Se agregó ${cantidad} ${producto}(s) al carrito.`);
        }, 1000);
    });
}

agregarAlCarrito("Laptop HP", 1500)
    .then(mensaje => {
        console.log(mensaje);
        return agregarAlCarrito("Teclado Logitech", 50, 2);
    })
    .then(mensaje => {
        console.log(mensaje);
        return agregarAlCarrito("Mouse inalámbrico", 30);
    })
    .then(mensaje => {
        console.log(mensaje);
        console.log("Contenido actual del carrito:");
        console.log(carrito);
    })
    .catch(error => console.error(error));
