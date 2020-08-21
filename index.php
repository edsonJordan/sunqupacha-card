<?php 
include 'conexion.php';
$con = new Conexion();
/* Data products */
$datos = $con->ProView();
/* Types categorys */
$category = $con->getCategory();
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
      
    <div class="nav__container">
        <div class="nav__menu">
            <ul class="nav__ul" id="nav__ul">
                <?php 
                 foreach ($category as $data) {
                     ?>
                  <li><a class="nav_items <?php echo strtolower($data['name_category']); ?>" id="<?php echo strtolower($data['name_category']); ?>" ><?php echo $data['name_category'] ?> </a></li> 
                     <?php 
                 }
                ?>                                
            </ul>
        </div>
        <div class="nav__icon">        
            <input type="checkbox" id="link__check" class="input__class none" >
            <label for="link__check" class="link__icon" >
                <img class="icon__buy" src="img/shopping-cart.svg" alt="">
            </label>            
        </div>                       
    </div>      
    <div class="container__card">
        <div class="content__card" id="content__card">
            <?php 
            foreach ($datos as $data) {
            ?>                    
            <div class="card <?php echo strtolower($data['name_category']) ?>" id="<?php echo 'product-'.$data['cod_product'] ; ?>">            
            <form class="form__card">
            <!--Imagen-->            
            <img src="<?php echo "img/".$data['img_product']?>" class="img_card" alt="">
            <!-- Tittle -->
            <h3><?php echo $data['name_product'] ?></h3>   
            <!-- Price -->         
            <span class="span__product" ><?php echo $data['price_product'] ?></span>             
            <input type="number" class="product_number" id="<?php echo "stockItem-".$data['cod_product']; ?>" max="<?php echo $data['stock_product'] ?>" maxlength="3" min="1"  value="<?php echo $data['stock_product'] ?>" required >
            <input type="submit" class="button" attr-item="<?php echo $data["name_product"] ?>" attr-value="<?php echo $data["price_product"] ?>" value="add to cart"  > </input>                
        </form>    
        </div>           
            <?php
            }
            ?> 
        </div>        
        <div class="menu__card none" attr-total='1000' id="menu__card">
            <!-- <label for="" class="menu__total">Total: <i class="total" >400</i> </label> -->
            <div class="menu__items">
                <div  id="card__menu">                                                          
                </div>
            </div>
        </div>
    </div>
</body>
<script src="script.js" type="module"></script>
</html>
