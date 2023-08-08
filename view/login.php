<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Login</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link rel='stylesheet' type='text/css' media='screen' href='login.css'>
</head>

<body>
    <!-- <div class="conteiner"> -->

        <div class="login m-3 shadow">
            <h6 class="text-center my-4"><i class="bi bi-box-arrow-in-right icon"></i></h6>

            <div class="content-login">

                <form action="../controller/checkLogin.php" method="post">
                    <!-- USERNAME -->
                    <input 
                    type="email" 
                    name="user" 
                    id="user" 
                    placeholder="Usuario" 
                    class="my-3 control" 
                    required>

                    <!-- PASSWORD -->
                    <div class="password">
                        <input type="password"
                        name="pass" 
                        id="pass" 
                        placeholder="Contraseña" 
                        class="my-2 control" 
                        required>
                        
                        <button type="button" class="toggle" onclick="togglePassword(this)"></button>
                    </div>
                    <button type="submit"class="control">Iniciar Sesión</button>
                </form>

                    <div class="enlace">
                        <p class="mb-0">¿Aún no tienes cuenta? <a href="addUser.php">Registrarse</a></p>
                    </div>

            </div>
        <?php 
                $mensaje = isset($_GET["mensaje"]) ? $_GET["mensaje"] : "";
                if ($mensaje!="") {
                    echo "<div class='text-danger text-center m-2'>";
                    echo $mensaje;
                    echo "</div>";
                }
            
        ?>
        </div>


    <!-- </div> -->

    <script type="text/javascript" src="../js/main.js"></script>
</body>
</html>