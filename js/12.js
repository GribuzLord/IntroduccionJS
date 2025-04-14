"use strict"//Modo estricto de javascript

//Objetos
const producto={
    nombreProducto: "Monitor 20 pulgadas",
    precio:300,
    disponible:true 
}

Object.freeze(producto) //No deja que se agreguen nuevas propiedades ni que se eliminen, tampoco modificarlas
Object.seal(producto) //No deja que se eliminen ni se agreguen pero si permite modificar

producto.imagen="imagen.jpg"
console.log(Object.isFrozen(producto))

console.log(producto)