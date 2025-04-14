//Objetos
const producto={
    nombreProducto: "Monitor 20 pulgadas",
    precio:300,
    disponible:true 
}

//Forma anterior
// const precioProducto=producto.precio
// const nomProducto=producto.nombreProducto

// console.log(precioProducto)
// console.log(nomProducto)

//Destructuring
const {precio,nombreProducto}=producto
console.log(precio)
console.log(nombreProducto)