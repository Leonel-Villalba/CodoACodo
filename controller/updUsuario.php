<?php 
$id=$_POST["id"];
$user=$_POST["user"];
$pass=$_POST["pass"];


try {
    $conn= new mysqli("localhost", "root", "", "php_23084");
    if($conn->query("UPDATE usuarios SET usuario='$user', clave='$pass' WHERE idusuario='$id'")){
        header("Location: ../view/tableUser.php");
    }else{
        header("Location: ../view/editUser.php?mensaje?id=$id&mensaje=Error%20al%20modificar%20usuario");
    }
} catch (\Throwable $th) {
    header("header(Location: ../view/editUser.php?mensaje?id=$id&mensaje=Error%20al%20modificar%20usuario");
}
?>