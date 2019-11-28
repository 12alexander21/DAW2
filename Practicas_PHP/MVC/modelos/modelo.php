<?php

class modelo{
    private $conexion;
    private $host = "localhost";
    private $user = "root";
    private $pass = "";
    private $db = "bdusuarios";

    public function __construct(){
        $this->conectar();
    }

    public function conectar(){
        try {
            $this->conexion = new PDO("mysql:host=$this->host;dbname=$this->db,$this->user,$this->pass");
            $this->conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $return = TRUE;
        } catch (PDOException $ex) {
            $return = $ex->getMessage();
        }
        return $return;
    }
}
?>