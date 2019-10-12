<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 5</title>
    <?php
    $numero = $_GET["num"];
    if ($numero == null) $numero = 4;
    ?>
</head>
<body>
    <h1>Tabla de multiplicar del <?php echo $numero ?> </h1>
    <?php
    for ($i=1; $i <= 10; $i++) { 
    ?>
        <h4><?php echo "$numero x $i = ".$numero * $i ?></h4>
    <?php    
    }
    ?>
</body>
</html>