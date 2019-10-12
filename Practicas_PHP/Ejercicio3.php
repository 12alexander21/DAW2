<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 2</title>
    <style type="text/css">
        h1 { text-align: center; }
    </style>
    <?php
    /*Ejercicio 2.Escriba un programa que imprima por pantalla los cuadrados 
    (el número multiplicado por sí mismo) de los 10 primeros números naturales.  */
    ?>
</head>
<body>
    <?php
    echo "<h1>Ejercicio 2</h1>";
    for ($i=1; $i <= 10; $i++) { 
        echo "<h3>  $i   ² = " .  pow($i,2) . "</h3>";
    }
    ?>
</body>
</html>