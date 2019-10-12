<!DOCTYPE html>
<html lang="en">
<head>
    <title>Ejercicio Clase 1</title>
    <?php
        $array = ['cero', 'uno', 'dos'];
    ?>
</head>
<body>
    <table border="1" cellpadding="5,5,5,5">
        <tr>
            <td> Índice </td>
            <td> Palabra </td>
        </tr>
        <?php
            for ($i=0; $i < count($array); $i++) {
            ?>
                <tr>
                    <td><?php echo $i ?></td>
                    <td><?php echo $array[$i] ?></td> <br>
                </tr>
            <?php 
            } ?>
    </table>    
</body>
</html>