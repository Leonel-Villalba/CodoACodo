// levanto el modal por su id delModal
const delModal = document.getElementById('delModal')
if (delModal) {
    // agrego un evento cuando se abre el modal
    delModal.addEventListener('show.bs.modal', event => {
    // trae el botón del link a
    const button = event.relatedTarget

    // trae el atributo idUsuario y user enviado desde el link a
    const idUsuario = button.getAttribute('idUsuario')
    const user = button.getAttribute('user')

    // asigno al input:hidden el idUsuario para luego enviarlo x el form
    let inputIdUser = document.getElementById('idUser')
    inputIdUser.value=idUsuario

    // muestro el nombre del user en el modal
    let divDatosUser = delModal.querySelector('#datosUser')
    console.log(divDatosUser)
    divDatosUser.innerHTML = user

})
}


//ESTO VALIDA EL BOTON AGREGAR USUARIO 
function validarUsu() {

    let user=document.getElementById("user").value


    if (!user.includes("@")) {
        document.getElementById("mensaje").innerHTML="El usuario debe contener un @"
        document.getElementById("mensaje").className="text-danger fw-bold p-2 text-center"
    } else if(!user.toLowerCase().includes("gmail.com")) {
        document.getElementById("mensaje").innerHTML="El usuario debe contener el dominio gmail.com"
        document.getElementById("mensaje").className="text-danger fw-bold p-2 text-center"
    } else {
        document.getElementById("mensaje").innerHTML=""
    }

}
function defFortaleza() {
    
    let pass=document.getElementById("pass").value


    // const regex= new RegExp("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
    const regex= new RegExp("(?=.*[a-z])(?=.*[A-Z]).{8,}")
    if (!regex.test(pass)) {
        document.getElementById("mensaje").innerHTML="Debe contener una  minúscula, una mayuscula y debe ser mayor a 8 caracteres"        
        document.getElementById("mensaje").className="text-danger fw-bold p-2 text-center"
    } else {
        document.getElementById("mensaje").innerHTML=""        
        document.getElementById("mensaje").className=""
    }

}

// verifica que la pass y la rep pass sean iguales
function compararPass() {
    let repPass=document.getElementById("repPass").value
    let pass=document.getElementById("pass").value

    if (repPass!=pass) {
        document.getElementById("mensaje").innerHTML="La contraseñas no coinciden"        
        document.getElementById("mensaje").className="text-danger fw-bold p-2 text-center"
    } else {
        document.getElementById("mensaje").innerHTML="Las contraseñas coinciden"        
        document.getElementById("mensaje").className="text-success fw-bold p-2 text-center"
        
    }
}
