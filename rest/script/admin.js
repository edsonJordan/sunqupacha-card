const obtenerDatos = ()=>{    
    fetch(`http://localhost:8080/sunqupacha-portafolio/card/rest/data/api`)
    .then(res => res.ok ? Promise.resolve(res): Promise.reject(res)) 
    .then(res=> res.json())
    .then(res=> {
        console.log(res);        
    })
}
obtenerDatos();
//console.log("gola");
