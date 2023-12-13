const nombre = document.querySelector("#nombre");
const correo = document.querySelector("#email");
const area = document.querySelector("#area");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");


document.getElementById('form').addEventListener('submit', function (e) {
  
  e.preventDefault(); // Previene el envío del formulario por defecto
  
  var validarEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var validarNombre = /^[A-Za-z\s]+$/;

  var validarAsunto = /^(?!.*[^A-Za-z0-9\s].*|[A-Za-z0-9\s].*[^A-Za-z0-9\s].*)[A-Za-z0-9\s!@#$%^&*()_+{}\[\]:;<>,.?~\\/]+$/;

  if (nombre.value == "" || !validarNombre.test(nombre.value)) {
    swal({
      title: "Ingresá tu nombre o apodo",
      text: "Solo se permiten letras",
      icon: "warning",
      buttons: false,
      timer: 2500
    })
    nombre.focus()
    return false;
  }

  //si no tiene un formato de Email sale esto
  if (!validarEmail.test(correo.value)) {
    swal({
      title: "Ingresá un correo electronico válido",
      text: "Revisa el correo electronico ingresado",
      icon: "warning",
      buttons: false,
      timer: 2500
    })
    correo.focus()
    return false;
  }

  //si no seleccionó el área de interés
  if (area.value == "default") {
    swal({
      title: "Selecciona un area de interés",
      text: "Debes seleccionar un area de la lista",
      icon: "warning",
      buttons: false,
      timer: 2500
    })
    area.focus()
    return false;
  }

  // si el asunto tiene más de 50 letras o ninguna sale esto
  
  if (asunto.value.length == 0 || asunto.value.length > 35 || !validarAsunto.test(asunto.value)) {
    swal({
      title: "Revisa el asunto de tu mensaje",
      text: "El asunto no puede estar vacío ni superar los 35 caracteres (solo se permiten letras y números)",
      icon: "warning",
      buttons: false,
      timer: 2500
    })
    asunto.focus()
    return false;
  }

  // si el mensaje tiene menos de 30 caracteres y más de 1000 caracteres sale este msj
  if (mensaje.value.length == 0 || mensaje.value.length > 1000) {
    swal({
      title: "Mensaje vacío",
      text: "El cuerpo de tu mensaje está vacío o supera el límite de 1000 caracteres",
      icon: "warning",
      buttons: false,
      timer: 2500
    })
    mensaje.focus()
    return false;
  }

    swal({
    title: 'Mensaje listo para ser enviado',
    text: '¿Quieres enviar tu mensaje?',
    icon: 'warning',
    buttons: true
    }).then((value) => {
    if (value) {  
      swal({
        title: "¡Muchas gracias!",
        text: `Tu mensaje ${nombre.value} ha sido enviado con éxito`,
        icon: "success",
        buttons: false,
        timer: 3000
      })
        document.getElementById('form').submit();
    }
  })
});
