<?php 
include 'conexion.php';
$con = new Conexion();
/* var_dump($con->ProView()); */
$datos = $con->ProView();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Carrito de compras</title>
</head>
<body>
    <div class="container__card">
        <div class="content__card">
            <?php 
            foreach ($datos as $data) {
            ?>
            <div class="card" att-type="<?php echo $data['name_category'] ?>">
            <!--Imagen-->            
            <img src="<?php echo "img/".$data['img_product'] ?>" class="img_card" alt="">
            <!-- Tittle -->
            <h3><?php echo $data['name_product'] ?></h3>   
            <!-- Price -->         
            <span><?php echo $data['price_product'] ?></span>             
            <a href="" class="button " > Agregar al carrito</a>
            </div>
            <?php
            }
            ?> 
        </div>        
        <div class="menu__card  none">
            <label for="" class="menu__total">Total: <i class="total" >400</i> </label>
            <div class="menu__items">
                <div class="card__menu">                                                                                
                    <?php 
                    foreach ($datos as $data) {
                    ?>                    
                        <div class="menu__img">
                        <!--Imagen-->                                
                        <img src="<?php echo "img/".$data['img_product'] ?>" class="img_menu" alt="">
                        </div>
                        <div class="menu__content">                        
                        <!-- Tittle -->
                        <h3><i><?php echo $data['name_product'] ?></i></h3>  
                        <!-- Description --> 
                        <p>Cantidad</p>
                        <p>Subtotal</p>
                        <!-- Price -->         
                        <span><?php echo $data['price_product'] ?></span>             
                        <a href="" class="button " > Agregar al carrito</a>
                        </div>
                    
                    <?php
                    }
                    ?> 
                </div>
            </div>
        </div>
    </div>

<script src="script.js" type="module"></script>
</body>
</html>
