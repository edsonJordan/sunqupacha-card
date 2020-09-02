const getApi=()=>{
    //fetch('api.php').then()
    //https://stackoverflow.com/questions/15757750/how-can-i-call-php-functions-by-javascript
    //https://stackoverflow.com/questions/1006248/how-do-i-get-the-function-name-inside-a-function-in-php
    //https://stackoverflow.com/questions/23371118/call-to-undefined-method-pdoexecute
}

const obtenerDatos = ()=>{    
    fetch(`http://localhost:8080/sunqupacha-portafolio/card/api.php`)
    .then(res => res.ok ? Promise.resolve(res): Promise.reject(res)) 
    .then(res=> res.json())
    .then(res=> {
        console.log(res);        
    })
}
obtenerDatos();