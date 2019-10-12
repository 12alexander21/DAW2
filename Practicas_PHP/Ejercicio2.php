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
    <h1>Ejercicio 2</h1>
        <?php
        for ($i=1; $i <= 10; $i++) { 
        ?>
            <h3><?php echo $i ?>  ² = <?php echo pow($i,2) ?></h3>
        <?php }
        ?>
</body>
</html>