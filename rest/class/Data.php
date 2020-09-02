<?php 
include '.././conexion.php';
class Data{
    public $con ;
    public function __construct()            
    {
        $this->con = new Conexion();         
    }
    public function Api(){
        if ($_SERVER['REQUEST_METHOD'] == 'GET')
            {
                $view = $this->con->ProViewObject();       
                header('Content-Type: application/json; charset=utf-8');        
                echo(json_encode($view));        
            }

    }


}