//Promises

const usuarioAutenticado=new Promise((resolve,reject)=>{
    const auth=true;
    if(auth){
        resolve('Usuario autenticado'); //El promise se cumple
    } else{
        reject('No se pudo iniciar sesion'); //El promise no se cumple
    }
});

usuarioAutenticado
    .then(resultado=>console.log(resultado))
    .catch(error=>console.log(error));

//En los promises hay 3 estados
//Pendindg:No se ha cumplido pero tampoco se ha rechazado
//Fulfilled:Ya se cumplio
//Rejected: Se rechazo o no se cumplio