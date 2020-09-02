<?php 
spl_autoload_register(function($name_clase){
    require_once 'library/' . $name_clase . '.php';
});
?>