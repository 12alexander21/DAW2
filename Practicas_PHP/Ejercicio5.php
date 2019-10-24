<!DOCTYPE html>
<html lang="es">
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <meta charset="UTF-8">
    <title>Ejercicio 5</title>
    <?php

    $numero = 0;
    (isset($_GET["num"]) && is_numeric($_GET["num"]))? $numero = $_GET["num"]: $numero = 0;
    $numeroForm = 0;
    (isset($_POST["numero"]) && is_numeric($_POST["numero"]))? $numeroForm = $_POST["numero"] : $numeroForm = 0;

    ?>
</head>
<body>
    <h1 class="h1">Tabla de multiplicar del <?php echo $numero ?> con GET </h1>
    <?php
    for ($i=1; $i <= 10; $i++) { 
    ?>
        <h4 class="h4"><?php echo "$numero x $i = ".$numero * $i ?></h4>
    <?php    
    }
    ?>
    <hr>
    <h1 class="h1">Tabla de multiplicar del <?php echo $numeroForm ?> con POST</h1>
    <form action="Ejercicio5.php" method="post" class="form-inline">
        <label>Numero: </label>
        <input class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" type="number" name="numero" placeholder="Introduzca un número">
        <input type="submit" value="Enviar">
    </form>
    <?php
    for ($i=1; $i <= 10; $i++) {
    ?>
        <h4 class="h4"><?php echo "$numeroForm x $i = ".$numeroForm * $i ?></h4>
    <?php
    }
    ?>
</body>
</html>