//Array methods

const meses=["Enero","Febrero","Marzo","Abril","Mayo"]

const carrito=[
    {nombre: "Monitor 20 pugadas", precio: 500},
    {nombre: "Television 50 pugadas", precio: 700},
    {nombre: "Tablet", precio: 300},
    {nombre: "Audifonos", precio: 200},
    {nombre: "Teclado", precio: 50},
    {nombre: "Celular", precio: 500},
    {nombre: "Bocinas", precio: 300},
    {nombre: "Laptopo", precio: 800},
]

//forEach
meses.forEach(function(mes){
    if(mes=="Marzo"){
        console.log("Marzo si existe")
    }
});

//Includes
let resultado =meses.includes("Diciembre")

//some (ideal para arreglo de objetos)

resultado=carrito.some(function(producto){
    return producto.nombre=="Celular"
})

//Mas adelante arrow function

//Para sumar todos los objetos del carrito
//Reduce
resultado=carrito.reduce(function(total,producto){
    return total+producto.precio
},0)

//Filter
resultado=carrito.filter(function(producto){
    return producto.nombre==="Celular"
})

console.log(resultado)