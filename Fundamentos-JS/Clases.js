
class Producto {
    constructor(nombre, precio, cantidad = 1) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
        console.log(`Se agregó ${producto.cantidad} ${producto.nombre}(s) al carrito.`);
    }

    mostrarContenido() {
        console.log("Contenido del carrito:");
        this.productos.forEach(producto => {
            console.log(`${producto.nombre} - Cantidad: ${producto.cantidad} - Precio unitario: ${producto.precio}`);
        });
    }
    calcularTotal() {
        let total = 0;
        this.productos.forEach(producto => {
            total += producto.precio * producto.cantidad;
        });
        console.log(`Total de la compra: ${total}`);
    }
}

const carrito = new Carrito();

const producto1 = new Producto("Laptop HP", 1500);
const producto2 = new Producto("Teclado Logitech", 50, 2);
const producto3 = new Producto("Mouse inalámbrico", 30);

carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);
carrito.agregarProducto(producto3);

carrito.mostrarContenido();
carrito.calcularTotal();
