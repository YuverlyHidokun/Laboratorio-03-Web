// Definimos un objeto 
let carrito = [];

// Función para agregar un producto
function agregarAlCarrito(producto, precio, cantidad = 1) {
    const indice = carrito.findIndex(item => item.producto === producto);
    if (indice !== -1) {
        carrito[indice].cantidad += cantidad;
    } else {
        carrito.push({ producto, precio, cantidad });
    }
    console.log(`Se agregó ${cantidad} ${producto}(s) al carrito.`);
}

function mostrarCarrito() {
    console.log("Contenido del carrito:");
    carrito.forEach(item => {
        console.log(`${item.producto} - Cantidad: ${item.cantidad} - Precio unitario: ${item.precio}`);
    });
}

// Función para calcular el total de la compra
function calcularTotal() {
    let total = 0;
    carrito.forEach(item => {
        total += item.precio * item.cantidad;
    });
    console.log(`Total de la compra: ${total}`);
}

agregarAlCarrito("Laptop HP", 1500);
agregarAlCarrito("Teclado Logitech", 50, 2);
agregarAlCarrito("Mouse inalámbrico", 30);
mostrarCarrito();
calcularTotal();
