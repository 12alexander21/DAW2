<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 12</title>
    <?php
        $vector = [random_int(1,100), random_int(1,100), random_int(1,100), random_int(1,100), random_int(1,100)];
        $aleatorio = random_int(1,100);
    ?>
</head>
<body>
    <h1>Ejercicio 12</h1>
        <h3>Recorrer y mostrarlo</h3>
            <?php
            for ($i=0; $i < count($vector); $i++) { ?>
                <b><?php echo $vector[$i] ?></b>
            <?php }
            ?>
        <h3>Ordenar y mostrarlo</h3>
            <?php 
            sort($vector);
            for ($i=0; $i < count($vector); $i++) { ?>
                <b><?php echo $vector[$i] ?></b>
            <?php }
            ?>
        <h3>Mostrar su longitud</h3>
            <b>Longitud = <?php echo count($vector) ?></b>
        <h3>Buscar en el vector</h3>
            <?php
                if (array_search($aleatorio, $vector) == true) 
                {
                    echo "Se ha encontrado el número $aleatorio en el vector";
                }                    
                else
                {
                    echo "No se ha encontrado el número $aleatorio en el vector";
                } 
            ?>
</body>
</html>