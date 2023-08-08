<?php 
    $user = $_POST["user"];
    $pass = $_POST["pass"];


try {
    require_once("../dao/UsuarioDAO.php"); 
    
    $usuDAO=new UsuarioDAO();
    $usuValido=$usuDAO->validarUsuYPass($user, $pass);

    if($usuValido){
        header("Location: ../view/inicio.php");
    }else{
        header("Location: ../view/login.php?mensaje=Usuario%20o%20contraseña%20incorrectos.");
    }

} catch (\Throwable $th) {
    header("Location: ../view/login.php?mensaje=Usuario%20o%20contraseña%20incorrectos.");
}

?>