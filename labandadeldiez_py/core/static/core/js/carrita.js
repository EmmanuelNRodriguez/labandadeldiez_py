var carrito = {
    prod1: 0,
    prod2: 0,
    prod3: 0,
    prod4: 0,
    prod5: 0,
    prod6: 0
};

const textoProd = {
    text1: "Remera Blanca",
    text2: "Buzo Capucha",
    text3: "Chomba Roja",
    text4: "Taza",
    text5: "Lapicera",
    text6: "Vinilo"
};

function sumarProducto(productoId) {
    const cantidad = Number(document.querySelector(`#p${productoId}`).value);
    const botonAgregar = document.querySelector(`#addp${productoId}`);
    const productoCarrito = `prod${productoId}`;

    if (botonAgregar.textContent === "Agregar") {
        carrito[productoCarrito] += cantidad;
        botonAgregar.textContent = "Quitar";
        localStorage.setItem("carrito",JSON.stringify(carrito))
    } else {
        if (carrito[productoCarrito] >= cantidad) {
            carrito[productoCarrito] -= cantidad;
            if(carrito[productoCarrito]==0) botonAgregar.textContent = "Agregar";
        }
    }

    const totalCarrito = Object.values(carrito).reduce((total, cantidad) => total + cantidad, 0);
    document.querySelector("#cantCarr").textContent = totalCarrito;
}

for (let i = 1; i <= 4; i++) {
    const botonAgregar = document.getElementById(`addp${i}`);
    botonAgregar.addEventListener('click', () => sumarProducto(i));
}

function vaciarCarr(){
    if(document.querySelector("#cantCarr").textContent > 0){
        for (let i = 1; i <= 6; i++) {
            const productoCarrito = `prod${i}`;
            carrito[productoCarrito] = 0;
        }
        document.querySelector("#cantCarr").textContent = 0;
        swal({
            title: "Hecho!",
            text: "Vaciamos tu carrito!",
            icon: "success",
            buttons: false,
            timer: 2500,
        });
        localStorage.setItem("carrito",JSON.stringify(carrito))
    } 
}

const verCarr = () => {
    let textCarr = "\n\n";
    
    for (let i = 1; i <= 6; i++) {
        const productoCarrito = `prod${i}`;
        const textoCarrito = `text${i}`;     
        Number(carrito[productoCarrito]) > 0 && (textCarr += `${textoProd[textoCarrito]} --- cant: ${carrito[productoCarrito]}\n`);
    }
    textCarr = Number(document.querySelector("#cantCarr").textContent)>0? `${textCarr}\n\nTotal de productos: ${document.querySelector("#cantCarr").textContent}\n` : "\nCarrito de compras vacío\n";
    swal("Detalle de tu carrito", `${textCarr}`);
};

function cargarProductos(){
    const productosGuardados = localStorage.getItem("carrito");
    if(productosGuardados){
         carrito = JSON.parse(productosGuardados);
            const totalCarrito = Object.values(carrito).reduce((total, cantidad) => total + cantidad, 0);
            document.querySelector("#cantCarr").textContent = totalCarrito;
    }
}
