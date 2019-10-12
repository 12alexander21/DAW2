<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 2</title>
    <style type="text/css">
        h1 { text-align: center; }
    </style>
    <?php
    /*Ejercicio 3.Modifique el ejercicio anterior para que muestre al lado de cada cuadrado si es un número par o impar.  */
    ?>
</head>
<body>
    <h1>Ejercicio 3</h1>
    <?php
    for ($i=1; $i <= 10; $i++) { 
    ?>
        <h3><?php echo $i ?> ² =  <?php echo pow($i,2) ?> </h3>
    <?php }
    ?>
</body>
</html>