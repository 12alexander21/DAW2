<?php

if (isset($_POST["submit"]))
{
    if(!empty($_POST["name"]))
    {
        echo "Nombre : ". $_POST["name"]."<br>";
    }
    if(!empty($_POST["surname"]))
    {
        echo "Apellidos : ". $_POST["surname"]."<br>";
    }
    if(!empty($_POST["bio"]))
    {
        echo "Biografia : ". $_POST["bio"]."<br>";
    }
    if(!empty($_POST["email"]))
    {
        echo "Email : ". $_POST["email"]."<br>";
    }
    if(!empty($_POST["password"]))
    {
        echo "Contraseña : ". $_POST["password"]."<br>";
    }
    if(isset($_POST["role"]))
    {
        echo "Perfil : ". $_POST["role"]."<br>";
    }
    if(isset($_POST["image"]))
    {
        echo "Fotografía : Nos ha llegado <br>";
    }
}

?>