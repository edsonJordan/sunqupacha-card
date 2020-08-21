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
        addCart();
    })
    const addCart=()=>{
            const datos = ["codigo", "imagen", "cantidad" , "precio" ];
            
         
            for(const data of datos){
                console.log(data);
                
            }
    }
