<?php

if ($_POST && $_POST['bola']) {
    $bola = $_POST['bola'];
    echo json_encode($bola);
}
