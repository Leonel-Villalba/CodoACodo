<?php 
$idUser = $_POST["idUser"];


try {
    $conn = new mysqli("localhost", "root","", "php_23084");
    if($conn->query("DELETE FROM usuarios WHERE idusuario=$idUser")){
        header("Location: ../view/tableUser.php");
    }else{
        header("Location: ../view/tableUser.php?mensaje=Error%20al%20eliminar%20usuario");
    }
} catch (\Throwable $th) {
    header("Location: ../view/tableUser.php?mensaje=Error%20al%20eliminar%20usuario");
}
?>