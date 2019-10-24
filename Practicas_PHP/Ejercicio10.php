<!DOCTYPE html>
<html lang="es">
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ejercicio 10</title>
    <?php
        $numero;
        (isset($_GET["num"]) && is_numeric($_GET["num"]))? $numero = $_GET["num"] : "";
    ?>
</head>
<body>
    <h1 class="text-center border-bottom">Multiplos de <?php echo $numero ?> del 1 al 100</h1>
    <?php
    for ($i=1; $i <= 100; $i++) {  
        if ($numero * $i > 100){
            break;
        }
        ?>
        <p class="text-center"><?php echo $numero * $i?></p>
        
    <?php } ?>
</body>
</html>