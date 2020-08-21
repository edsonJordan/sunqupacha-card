<?php 
class Conexion{
        public $con;
        function __construct(){
        $conexion = new PDO("mysql:host=localhost;dbname=card_buy", 'root', '');
        $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $conexion->exec('set names utf8');        
        $this->con=$conexion;
            return $this->con;
        }
        function ProView(){
        $consul = $this->con->prepare("SELECT p.cod_product, p.cod_product, c.name_category, p.name_product, p.stock_product, p.price_product, p.img_product FROM product p, category c where p.cod_category=c.cod_category");
        $consul->execute();
        return $consul->fetchAll();
        }
        function getCategory()
        {
        $consul = $this->con->prepare("SELECT name_category FROM category");
        $consul->execute();
        return $consul->fetchAll();
        }
        
        function editStock(){
                    

        }
        

}

?>