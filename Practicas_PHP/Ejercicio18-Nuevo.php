<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Ejercicio 18</title>
</head>
<body>
    <table border=2 width=40% style="text-align:center" class="table table-striped">
    <tr>
        <td bgcolor="black"><font color = "white">Frutas</font></td>    
        <td bgcolor="black"><font color = "white">Deportes</font></td>  
        <td bgcolor="black"><font color = "white">Idiomas</font></td>  

    </tr>
        <?php
    $array = [
        "Frutas" => ["Manzana", "Naranja","Sandia","Fresa"],
        "Deportes" => ["Futbol","Tenis","Baloncesto","Beisbol"],
        "Idiomas" => ["Español", "Ingles", "Francés", "Italiano"]
    ];

    for($i=0;$i < count($array)+1;$i++){
        echo "<tr>";
        echo "<td>" .$array["Frutas"][$i]. "</td>";
        echo "<td>" .$array["Deportes"][$i]. "</td>";
        echo "<td>" .$array["Idiomas"][$i]. "</td>";
        echo "</tr>";
    }
    
    ?>
    </table>
</body>
</html>