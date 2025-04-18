//Funciones

//Declaracion de funcion
function suma(numero1,numero2){//Numero 1 y 2 son parametros
    console.log(numero1+numero2);
}

suma(10,10);//Argumentos o valores reales
suma(3,3);
suma(5,5);
suma(2,2);

//Expresion de la funcion
const suma2=function(){
    console.log(3+3)
}

suma2();

//IIFE
(function() {
    console.log("Esto es una funcion");
})();