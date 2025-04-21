async function obtenerEmpleados(){
    const archivo='empleados.json';
    
    // fetch(archivo)
    //     .then(resultado=>{
    //         return resultado.json();
    //     })
    //     .then(datos=>{
    //         const{empleados}=datos;
    //         // console.log(empleados);
    //     });
    const resultado=await fetch(archivo);
    console.log(resultado);
    const datos=await resultado.json();
    console.log(datos);
}

obtenerEmpleados();