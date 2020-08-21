const card = document.getElementById("menu__card");
const check = document.getElementById("link__check");
check?.addEventListener('change', (e)=>{            
    card?.classList.toggle( "none");
})
const menu = document.getElementById("nav__ul");
/* Listener menus active */
menu.addEventListener('click', (e)=>{    
    let sItem= document.getElementById(e.target.id)    
    if(sItem.classList[2] == undefined ){
        sItem.classList.add("active")                
    }    
    /* Remove active */
    const menus = menu.getElementsByTagName("a");
    for(const data of menus){              
        let Gmenus= document.getElementById(data.id);
        if(data.id !==  e.target.id ){
            Gmenus.classList.remove('active')
        }                                
    }
    /* Remove display */
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
           const data = [{codigo : [parent[1]], imagen:[e.target.childNodes[3].getAttribute('src')],
            cantidad: [e.target[0].value], precio: [e.target[1].getAttribute("attr-value")] }]
            addCart(data);
    })
    const addCart=(datos)=>{                                               
            const node = document.getElementById("card__menu");
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
                const eA = document.createElement("a")
                nodeChild2.classList.add("menu__content");
                eH3.textContent=data.cantidad;
                eSpan.textContent= data.precio;
                eA.classList.add("button", "cart"); 
                eA.textContent="Eliminar"               
                nodeChild2.appendChild(eH3);
                nodeChild2.appendChild(eSpan);
                nodeChild2.appendChild(eA);
                fragmentchild2.appendChild(nodeChild2);

                fragmentPat.appendChild(fragmentchild1);
                fragmentPat.appendChild(fragmentchild2);

                nodePatn.appendChild(fragmentPat);         
                node.appendChild(nodePatn);       
            }                       
    }