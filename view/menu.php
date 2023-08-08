<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menu</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link rel="stylesheet" href="inicio.css">
</head>

<body>
    <nav>
        <a href="./inicio.php" title="Logo">LOGO</a>

        <button id="abrir" class="menu-abrir"><i class="bi bi-list"></i></button>

        <div class="nav" id="nav">
            <button id="cerrar" class="menu-cerrar"><i class="bi bi-x"></i></button>

            <div>
                <ul class="menu-links">
                    <li><a href="./inicio.php">Inicio</a></li>
                    <li><a href="./tableUser.php">Usuarios</a></li>
                    <li><a href="./nosotros.php">Nosotros</a></li>
                </ul>


            </div>

        </div>

        <!-- <i class="bi bi-list menu-icon" onclick="toggleMenu(this)"></i> -->

    </nav>


    <script src="../js/menu.js"></script>
</body>

</html>