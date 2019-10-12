<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 4</title>
    <?php
    $resultado = 1; //
    $i = 1; //
    ?>
    <style type=text/css>
    #numeros {font-size: x-large;}
    #resultadoFinal {font-size: xx-large;}
    </style>
</head>
<body>
    <?php
    echo "<h1>Ejercicio 4</h1>";
    while ($i <= 20) {
        $resultado *= $i;
        if ($i != 20) echo "<b id='numeros'>$i x </b>";//Si el número es distinto a 20 añadimos un x 
        else echo "<b id='numeros'>$i</b>"; //Si no, imprimimos solo el número 
        $i++;
    }
    echo "<b id='resultadoFinal'> = $resultado </b>";
    ?>
</body>
</html>