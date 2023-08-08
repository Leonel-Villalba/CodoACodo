// SIGN UP PHP

// función nos indica un error si el usuario no tiene @ ni el dominio
// codoacodo o gmail.
function validarUsu() {
    // console.log("ingreso validarUsu")

    // dom: documen object model
    // console.log(document)
    // console.log(document.body)

    // // funciones js sobre dom
    // console.log(document.getElementById("titulo"))
    // console.log(document.getElementsByTagName("input"))
    // console.log(document.getElementsByClassName("btn"))

    let user=document.getElementById("user").value


    if (!user.includes("@")) {
        document.getElementById("mensaje").innerHTML="El usuario debe contener un @"
        document.getElementById("mensaje").className="text-danger text-center m-2 rounded"
    } else if(!user.toLowerCase().includes("gmail.com")) {
        document.getElementById("mensaje").innerHTML="El usuario debe contener el dominio gmail.com"
        document.getElementById("mensaje").className="text-danger text-center rounded px-4 pb-4 mb-6"
    } else {
        document.getElementById("mensaje").innerHTML=""
    }

}

// determina la fortaleza de una pass
// si teiene menos de 4 caracteres es baja, entre 4 y 8 media, y más de 8 es alta
function defFortaleza() {
    const baja=4
    const media=8
    
    let pass=document.getElementById("pass").value


    // const regex= new RegExp("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
    const regex= new RegExp("(?=.*[a-z])(?=.*[A-Z]).{8,}")
    // console.log(regex.test(pass))
    if (!regex.test(pass)) {
        document.getElementById("mensaje").innerHTML="Debe contener una  minúscula, una mayuscula y debe ser mayor a 8 caracteres"        
        document.getElementById("mensaje").className="text-danger text-center mb-6 px-4 pb-4 rounded mb-1 .fs-5 text"
    } else {
        document.getElementById("mensaje").innerHTML=""        
        document.getElementById("mensaje").className=""
    }


    // const regDigito= new RegExp("(?=.*\d)")
    // const regMin= new RegExp("(?=.*[a-z])")
    // const regMay= new RegExp("(?=.*[A-Z])")
    // const regMas8= new RegExp(".{8,}")
    
    // if (!regDigito.test(pass)) {
    //     document.getElementById("mensaje").innerHTML="Password debe contener un dígito"        
    //     document.getElementById("mensaje").className="bg-danger p-1 m-1 rounded"
    // } else if(!regMin.test(pass)) {
    //     document.getElementById("mensaje").innerHTML="Password debe contener una minúscula"        
    //     document.getElementById("mensaje").className="bg-danger p-1 m-1 rounded"

    // } else {
    //     document.getElementById("mensaje").innerHTML=""        
    //     document.getElementById("mensaje").className=""
    // }



//     if (pass.length<=baja) {
//         document.getElementById("mensaje").innerHTML="Fortaleza baja"        
//         document.getElementById("mensaje").className="bg-danger p-1 m-1 rounded"
//     } else if(pass.length<=media) {
//         document.getElementById("mensaje").innerHTML="Fortaleza media"        
//         document.getElementById("mensaje").className="bg-info p-1 m-1 rounded"
//     } else {
//         document.getElementById("mensaje").innerHTML="Fortaleza alta"        
//         document.getElementById("mensaje").className="bg-success p-1 m-1 rounded"
//     }
}

// verifica que la pass y la rep pass sean iguales
function compararPass() {
    let repPass=document.getElementById("repPass")
    let pass=document.getElementById("pass")

    if (repPass.value === pass.value) {
        document.getElementById("mensaje").innerHTML="Las contraseñas coinciden"        
        document.getElementById("mensaje").className="text-success p-2 rounded text-center mb-1"
    } else {
        document.getElementById("mensaje").innerHTML="Las contraseñas no coinciden"        
        document.getElementById("mensaje").className="text-danger text-center m-2 p-2 rounded"
    }
}

// function compararPass(contraseña1, contraseña2) {
//     if (contraseña1 !== contraseña2) {
//         return false; // Las contraseñas no coinciden
//     } else {
//         return true; // Las contraseñas coinciden
//     }
// }
// const pass = document.getElementById("pass");
// const repPass = document.getElementById("repPass");

// if (compararPass(pass, repPass)) {
//     console.log("Las contraseñas no coinciden");
// } else {
//     console.log("Las contraseñas coinciden");
// }

// todo: poner en enabled el botón cuando es valido el user y las password


