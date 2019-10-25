<!DOCTYPE html>
<html lang="es">
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ejercicio 16</title>
    <?php
        $email = "";
        $formatoCorrecto = "";

        if (isset($_GET["email"])){
            $email = $_GET["email"];
            
            if (filter_var($_GET["email"], FILTER_VALIDATE_EMAIL)){
                $formatoCorrecto = "Su formato es correcto";
            }
            else{
                $formatoCorrecto = "Su formato NO es correcto";
            }
            
        }
    ?>
</head>
<body>
    <h1>Validación de email</h1>
        <p>
            Email >
                <strong>
                    <?php echo $email ?>
                </strong>
        </p>
        <p>
            Formato >
                <strong>
                    <?php echo $formatoCorrecto ?>
                </strong>
        </p>
</body>
</html>