<!DOCTYPE html>
<html lang="es">
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ejercicio 16</title>
    <?php
        $cadena = "";
        if (!isset($_GET["cadena"])){
            $_GET["cadena"] = "texto de relleno";
        }
        
        $varCadena = $_GET["cadena"];
        
        (isset($varCadena) && !empty($varCadena))? $cadena = "" : $cadena = "texto en minusculas" ;
    ?>
</head>
<body>
    <h1>Autocompletado de cadena</h1>
        <p>Cadena > <strong><?php echo strtoupper($cadena) ?></strong></p>
</body>
</html>