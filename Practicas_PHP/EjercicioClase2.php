<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio Clase 2</title>
</head>
<body>
    <?php
        foreach ($_SERVER as $key => $valor) { ?>
            
            <h2><?php echo "$key - $valor" ?></h2>

        <?php
    }  ?>
</body>
</html>