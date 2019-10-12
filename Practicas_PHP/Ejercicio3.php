<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 3</title>
    <style type="text/css">
        h1 { text-align: center; }
    </style>
    <?php
    /*Ejercicio 3.Modifique el ejercicio anterior para que muestre al lado de cada cuadrado si es un número par o impar.  */
    $potencia; //Variable para guardar el valor de i$ al cuadrado
    $texto; //Variable para guardar texto de si es o no par
    ?>
</head>
<body>
    <h1>Ejercicio 3</h1>
    <?php
    for ($i=1; $i <= 10; $i++) { 
        $potencia = pow($i,2);
        if ($potencia % 2 == 0) $texto = "Es par";
        else $texto = "Es impar";
        ?>
        <h3><?php echo $i ?> ² =  <?php echo $potencia ." ". $texto ?></h3>
    <?php }
    ?>
</body>
</html>