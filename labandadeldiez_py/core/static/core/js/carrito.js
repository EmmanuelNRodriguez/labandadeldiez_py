carrito = {
    prod1: 0,
    prod2: 0,
    prod3: 0,
    prod4: 0,
    prod5: 0,
    prod6: 0,
    prod7: 0,
    prod8: 0,
    prod10: 0
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
            if(carrito[productoCarrito]==0) {
                botonAgregar.textContent = "Agregar";
                localStorage.setItem("carrito",JSON.stringify(carrito))
            }
        }
    }

    const totalCarrito = Object.values(carrito).reduce((total, cantidad) => total + cantidad, 0);
    document.querySelector("#cantCarr").textContent = totalCarrito;
}

function vaciarCarr(){
    const cantProd = localStorage.getItem("cantProd");

    if(document.querySelector("#cantCarr").textContent > 0){
        for (let i = 1; i <= cantProd; i++) {
            const productoCarrito = `prod${i}`;
            document.getElementById(`addp${i}`).textContent = "Agregar";
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
    const cantProd = localStorage.getItem("cantProd");
    let textCarr = "\n\n";

    for (let i = 1; i <= cantProd; i++) {
        const productoCarrito = `prod${i}`;
        const textoCarrito = localStorage.getItem(`titu_p${i}`);

        Number(carrito[productoCarrito]) > 0 && (textCarr += `${textoCarrito} --- cant: ${carrito[productoCarrito]}\n`);
    }

    textCarr = Number(document.querySelector("#cantCarr").textContent)>0? `${textCarr}\n\nTotal de productos: ${document.querySelector("#cantCarr").textContent}\n` : "\nCarrito de compras vacío\n";

    swal("Detalle de tu carrito", `${textCarr}`);
};

function cargarProductos(){
localStorage.setItem("cantProd",Number(document.getElementById("cantProd").textContent))

    const cantProd = Number(document.getElementById("cantProd").textContent)
    const productosGuardados = localStorage.getItem("carrito");

    if(productosGuardados){
         carrito = JSON.parse(productosGuardados);
            const totalCarrito = Object.values(carrito).reduce((total, cantidad) => total + cantidad, 0);
            document.querySelector("#cantCarr").textContent = totalCarrito;
            for (let i = 1; i <= cantProd; i++) {
            const botonAgregar = document.querySelector(`#addp${i}`);
            const productoCarrito = `prod${i}`;
            (carrito[productoCarrito]?botonAgregar.textContent = "Quitar":botonAgregar.textContent = "Agregar")
            }
    }
    // Agregar eventos para todos los botones "Agregar" de productos
    for (let i = 1; i <= cantProd; i++) {
    const botonAgregar = document.getElementById(`addp${i}`);
    botonAgregar.addEventListener('click', () => sumarProducto(i));
    localStorage.setItem(`titu_p${i}`, document.getElementById(`titu_p${i}`).textContent)
    }
}
