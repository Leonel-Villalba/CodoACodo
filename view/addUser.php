<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Sign-up</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link rel='stylesheet' type='text/css' media='screen' href='addUser.css'>
</head>

<body>

    <!-- <div class="conteiner"> -->

        <div class="login m-3 shadow">
            <h6 class="text-center my-4"><i class="bi bi-person-add icon"></i></h6>

            <div class="content-login">
                <form action="../controller/addUser.php" method="post">
                    <input type="email" name="user" id="user" onkeyup="validarUsu()"  placeholder="Usuario" class="my-2 control" required>
                    
                    <div class="password">
                        <input type="password" name="pass" id="pass" onkeyup="defFortaleza()" placeholder="Contraseña" class="my-2 control" required>
                        <input type="password" name="repPass" id="repPass" onkeyup="compararPass()" class="my-2 control" required placeholder="Repetir Contraseña">
                    </div>
                    <button type="submit"class="control">Registrarse</button>
                </form>
                <div class="enlace">
                    <p class="mb-0">¿Ya tienes una cuenta? <a href="login.php">Iniciar Sesión</a></p>
                </div>
                
                <div id="mensaje" class="p-0 mb-5"></div>
            </div>
            <?php 
                    // $mensaje=$_GET["mensaje"];
                    // if ($mensaje!="") {
                    //     echo "<div class='text-danger text-center m-2'>";
                    //     echo $mensaje;
                    //     echo "</div>";
                    // }
                
            ?>
        </div> 


    <!-- </div> -->


    <script src="../js/addUser.js"></script>
</body>
</html>