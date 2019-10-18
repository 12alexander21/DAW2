<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 18</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <?php
        $vector = [["Frutas", "Manzana", "Naranja", "Sandia", "Fresa"], ["Deportes", "Futbol", "Tenis", "Baloncesto", "Beisbol"], ["Idiomas", "Español", "Ingles", "Frances", "Italiano"]];;
    ?>
</head>
<body>
    <table border=1>
        
    <?php    for ($i=0; $i < count($vector[0]); $i++){ 
                //for ($j=0; $j < count($vector); $j++) { ?>

                    <tr>
                        <td><?php echo $vector[0][$i] ?></td>
                        <td><?php echo $vector[1][$i] ?></td>
                        <td><?php echo $vector[2][$i] ?></td>
                        
                    </tr>
                
                 
                
                <?php } ?>
    </table>
</body>
</html>