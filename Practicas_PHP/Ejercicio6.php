<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 6</title>
    <?php
        $meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        $meses_asociativo = ["1" => "Enero", "2" => "Febrero", "3" => "Marzo", "4" => "Abril", "5" => "Mayo", "6" => "Junio", "7" => "Julio", "8" => "Agosto", "9" => "Septiembre", "10" => "Octubre", "11" => "Noviembre", "12" => "Diciembre"];
    ?>
</head>
<body>
    <h1>Ejercicio 6</h1>
    <th><h3>Array indexado</h3></th>
    <table>
    <?php
    for ($i=0; $i < count($meses); $i++) { ?>
        
            <tr><td>Mes <?php echo $i+1 ?>: <?php echo $meses[$i] ?></td></tr>
        
    <?php }
    ?>

    <th><h3>Array asociativo</h3></th>
    

    <?php
    for ($i=1; $i <= count($meses_asociativo); $i++) { ?>
        
        <tr><td>Mes <?php echo $i ?>: <?php echo $meses_asociativo[$i] ?></td></tr>

    <?php }
    ?>
    </table>
</body>
</html>