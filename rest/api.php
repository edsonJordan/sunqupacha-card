<?php
include '../conexion.php';
class Api{        
    public $con;
    function __construct(){    
        $this->con = new Conexion();         
    }
    function Produc(){
        $view = $this->con->ProViewObject();        
        //header('Content-Type: application/x-json; charset=utf-8');
        /* if ($_SERVER['REQUEST_METHOD'] == 'GET')
        {
            echo "hay un get";
        } */
        header('Content-Type: application/json; charset=utf-8');        
        //var_dump($view);
        echo(json_encode($view));        
    }
}
$api = new Api();
echo "gola";
/* if ($_SERVER['REQUEST_METHOD'] == 'GET')
{
echo $api->Produc();
} */

?>