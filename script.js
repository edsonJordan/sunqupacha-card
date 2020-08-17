const card = document.getElementById("menu__card");
const check = document.getElementById("link__check");
check?.addEventListener('change', (e)=>{            
    card?.classList.toggle( "none");
})