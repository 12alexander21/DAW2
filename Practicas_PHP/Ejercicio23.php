<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <?php
        $numero = 0;
        (isset($_POST["numero"]) && is_numeric($_POST["numero"]))? $numero = $_POST["numero"] : "";
    ?>
</head>
<body>
    <h1>Formulario y tabla de multiplicar</h1>

    
</body>
</html>