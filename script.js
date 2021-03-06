window.addEventListener('load', (e)=>{
    countLocal();
const data = readLocal();
if(!data){    
    return
}
setTimeout(() => {
    for (const iterator of data) {
        let node = document.getElementById(iterator.node_stock);
        if(node.max === "0"  ){                            
         node.nextElementSibling.remove();             
        }
    }        
}, 1);
paintCart(data);
});
const card = document.getElementById("menu__card");
const check = document.getElementById("link__check");
check?.addEventListener('change', (e)=>{            
    card?.classList.toggle( "none");
})
const menu = document.getElementById("nav__ul");
/* Listener menus active */
menu.addEventListener('click', (e)=>{       
    if(e.target.nodeName !== "A"){
            return
    }
    let sItem= document.getElementById(e.target.id)    
    if(sItem.classList[2] == undefined ){
        sItem.classList.add("active")                
    }        
    /* Remove active  cards*/
    const menus = menu.getElementsByTagName("a");
    for(const data of menus){              
        let Gmenus= document.getElementById(data.id);
        if(data.id !==  e.target.id ){
            Gmenus.classList.remove('active')
        }                                
    }
    /* Remove display none cards */
    const cards = document.getElementById("content__card").getElementsByTagName("div");          
    for(const data of cards){           
            let gCards = document.getElementById(data.id);
            let cort = gCards.className.split(" ");                                                                     
            if(cort[1] !== e.target.id){            
                gCards.classList.add("none")
            }else{
                gCards.classList.remove("none")
            }                                 
    } 
    
    


})
    const nodeCard= document.getElementById("content__card");
    nodeCard.addEventListener('submit', (e)=>{        
        e.preventDefault();
        let parent= e.target.parentNode.id.split("-");   
        /* ID PRODUCT */ //console.log(parent[1]);                     
        /* iMAGEN PRODUCT */ //console.log(e.target.childNodes[3].getAttribute('src'));
        /* Cant  */        //console.log(e.target[0].value);
        /* Price */  // console.log(e.target[1].getAttribute("attr-value"));
        /* Name item */ //console.log(e.target[1].getAttribute("attr-item"));                                                              
           const data = [{codigo : parent[1], name: e.target[1].getAttribute("attr-item"), imagen:e.target.childNodes[3].getAttribute('src'),
            cantidad: e.target[0].value, precio: e.target[1].getAttribute("attr-value"), stock: e.target[0].getAttribute("max"), node_stock: e.target[0].id }]                                                                          
            if(readLocal() && readLocal().length > 0){ 
                const getLocal =readLocal();                       
                for (const iterator of getLocal){                                                            
                    if(iterator.codigo == data[0].codigo){                        
                        let addCant = parseInt(iterator.cantidad) + parseInt(data[0].cantidad) ;
                       // console.log("La acumulacion es "+ addCant);
                        iterator.cantidad=String(addCant);                                                                                            
                        let key = getLocal.indexOf(iterator);                        
                        getLocal[key]=iterator;                                                                                                
                        console.log(getLocal);
                        localStorage.removeItem("orderCart")                        
                        setLocal(getLocal);                      
                        paintCart(getLocal);
                        const pr = document.getElementById(e.target[0].id);
                        if(pr.max == "0"){                                                                                
                            e.target[1].remove()
                        }                                                                        
                        return
                        break
                    }
                                                             
                }
                        setLocal(data);
                        paintCart(readLocal());
                        
                     //   console.log("No Se repite");                            
            }else{
                setLocal(data)
                paintCart(readLocal());  
             //   console.log("No esta vacio");
            }                                            
            const pr = document.getElementById(e.target[0].id);
            if(pr.max == "0"){                                                                                
                e.target[1].remove()
            }
            countLocal();                        
    })
    const paintCart=(datos)=>{                                                          
            const node = document.getElementById("card__menu");        
            while (node.firstChild) {
                node.firstChild.remove();
            }
            const fragmentnode =document.createDocumentFragment(); 
            const fragmentPat = document.createDocumentFragment();
            const fragmentchild1 =document.createDocumentFragment();
            const fragmentchild2 = document.createDocumentFragment();
            for(const data of datos){
                const nodePatn= document.createElement("div")
                nodePatn.id= data.codigo;
                nodePatn.classList.add("card__menu")
                const nodeChild1 = document.createElement("div");
                const img= document.createElement("img");
                nodeChild1.classList.add("menu__img")
                img.setAttribute("src", data.imagen);
                img.classList.add("img_menu")                
                nodeChild1.appendChild(img);                
                fragmentchild1.appendChild(nodeChild1);
                const nodeChild2= document.createElement("div");
                const eH3 = document.createElement("h3")                
                const eSpan = document.createElement("span");
                const eSpan2= document.createElement("span")
                const eSpan3= document.createElement("span")
                const eA = document.createElement("a")
                nodeChild2.classList.add("menu__content");
                eH3.textContent=data.name;                                     
                eSpan.textContent= data.precio;
                eSpan.classList.add("span-precio")                                
                eSpan2.textContent= data.cantidad
                eSpan2.classList.add("span-cantidad")                                
                eSpan3.textContent= parseFloat(parseFloat(data.cantidad) * parseFloat(data.precio)).toFixed(2) 
                eSpan3.classList.add("span-subtotal")                                
                eA.classList.add("button", "cart"); 
                eA.setAttribute("attr-order", data.codigo)
                eA.textContent="Eliminar";                  
                calcStock(data.node_stock, data.stock, data.cantidad)
                nodeChild2.appendChild(eH3);
                nodeChild2.appendChild(eSpan);
                nodeChild2.appendChild(eSpan2);
                nodeChild2.appendChild(eSpan3);
                nodeChild2.appendChild(eA);
                fragmentchild2.appendChild(nodeChild2);
                fragmentPat.appendChild(fragmentchild1);
                fragmentPat.appendChild(fragmentchild2);
                nodePatn.appendChild(fragmentPat);         
                node.appendChild(nodePatn);       
            }                       
    }
const calcStock=(nodeStock, stock, order)=>{        
    const calc= parseInt(stock) - parseInt(order);    
    const nodes  = document.getElementById(nodeStock);
    nodes.removeAttribute("max")            
    nodes.setAttribute("max", calc)
    nodes.value=calc;
}
const setLocal=(data)=>{
    const readLocal= JSON.parse(localStorage.getItem('orderCart'));    
    if(!readLocal){
        localStorage.setItem('orderCart', JSON.stringify(data));
    }else{        
        readLocal[readLocal.length]=data[0];        
        localStorage.setItem('orderCart', JSON.stringify(readLocal));
    }
}
const readLocal=()=>{
    return JSON.parse(localStorage.getItem('orderCart'));
}
const cartMenu= document.getElementById("card__menu");
cartMenu.addEventListener('click', (e)=>{        
    if(e.target.nodeName === "A"){
        const elSelect= e.target.getAttribute("attr-order");
        const dataLocal = readLocal("orderCart");         
        for (const iterator of Object.values(dataLocal)) {        
                if(iterator.codigo == elSelect){
                    //console.log("se selecciono "+ iterator.codigo);
                    //console.log("Se va eliminar la posición " + dataLocal.indexOf(iterator) );                                        
                    const nodeStock= document.getElementById(iterator.node_stock);
                    //si esta vacio su stock devuelvele boton
                    if(nodeStock.max == "0"){
                        const elemen = document.createElement("input");
                        const fragment = document.createDocumentFragment();
                        elemen.classList.add("button")
                        elemen.value="add to cart";
                        elemen.setAttribute("type", "submit")
                        elemen.setAttribute("attr-value", iterator.precio)
                        elemen.setAttribute("attr-item", iterator.name)
                        fragment.appendChild(elemen)
                        nodeStock.parentNode.appendChild(fragment)
                    }
                    const reStock = parseInt(iterator.cantidad) + parseInt(nodeStock.max);                                                                                           
                    nodeStock.setAttribute("max", reStock);
                    nodeStock.setAttribute("value", reStock);
                    dataLocal.splice(dataLocal.indexOf(iterator), 1);   
                    localStorage.setItem('orderCart', JSON.stringify(dataLocal))
                    e.target.parentNode.parentNode.remove();  
                    countLocal()             
                    break; 
                }                                                                               
        }                                  
    }
    
})
const countLocal =()=>{
     const count = document.getElementById("icon-shoping");
     count.setAttribute("attr-count", readLocal().length)
    
     const node = document.getElementById("menu__card");
    let total = 0;
     for (const iterator of readLocal()) {
         //console.log(iterator.precio + " y la cantidad es " +iterator.cantidad);         
         let subtotal = (parseFloat(iterator.precio) * parseFloat(iterator.cantidad)).toFixed(2) 
         total += parseFloat(subtotal);
     }
     node.setAttribute("attr-total", total)
     
    
}

