//Funciones

//Declaracion de funcion
function suma(){
    console.log(10+10)
}

suma();

//Expresion de la funcion
const suma2=function(){
    console.log(3+3)
}

suma2();

//IIFE
(function() {
    console.log("Esto es una funcion");
})();