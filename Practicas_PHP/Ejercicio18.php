<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 18</title>
    <?php
        $vector = [["Frutas", "Manzana", "Naranja", "Sandia", "Fresa"], ["Deportes", "Futbol", "Tenis", "Baloncesto", "Beisbol"], ["Idiomas", "Español", "Ingles", "Frances", "Italiano"]];
        /*        $vector = ["Frutas" =>["Manzana", "Naranja", "Sandia", "Fresa"],
                 "Deportes" =>["Futbol", "Tenis", "Baloncesto", "Beisbol"],      "Idiomas" =>["Español", "Ingles", "Frances", "Italiano"]]; */
    ?>
</head>
<body>
    <table border=1>
        <!-- 
            for $i=0; $i < count$vector, COUNT_RECURSIVE; $i++ ?>
                <tr>
                    <td> echo print($vector[$i,$j]) ?></td>
                    <td> echo $vector[$i] ?></td>
                    <td> echo $vector[$i] ?></td>
                </tr>
                
           -->
            <?php foreach ($vector as list($titulo, $att1, $att2, $att3, $att4)) { ?>
                    <!-- <tr> -->    
                        
                    <!-- </tr> -->
                    <tr>    
                        <th><?php echo $titulo ?></th>
                        <td><?php echo $att1 ?></td>
                    
                        <td><?php echo $att2 ?></td>
                    
                        <td><?php echo $att3 ?></td>
                    
                        <td><?php echo $att4 ?></td>
                    </tr>
                    
                    <!--<tr>    
                        <th><?php echo $clave ?></th>
                        <td><?php echo $valor[0] ?></td>
                    
                        <td><?php echo $valor[1] ?></td>
                    
                        <td><?php echo $valor[2] ?></td>
                    
                        <td><?php echo $valor[3] ?></td>
                    </tr>  -->

        <?php } ?>print"<pre>\n";
                print_r($vector);
                print"</pre>\n";?>
    </table>
</body>
</html>