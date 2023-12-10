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
