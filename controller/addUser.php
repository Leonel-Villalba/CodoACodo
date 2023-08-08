<?php 
    $user = $_POST["user"];
    $pass = $_POST["pass"];

    try {
        require_once("../dao/UsuarioDAO.php");
        $usuDAO=new UsuarioDAO();
        $usuValido=$usuDAO->addUsuario($user, $pass);
        if($usuValido){
            header("Location: ../view/tableUser.php");
        }else{
            header("Location: ../view/addUser.php?mensaje=Error%20al%20agregar%20usuario");
        }
    } catch (\Throwable $th) {
        header("Location: ../view/addUser.php?mensaje=Error%20al%20agregar%20usuario"); 
    }


?>