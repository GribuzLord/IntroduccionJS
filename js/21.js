//Arrow functions


const suma2=(n1,n2)=> console.log(n1+n2)

suma2(5,10);

const aprendiendo=(tecnologia)=>{
    console.log(`Aprendiendo: ${tecnologia}`)
}

aprendiendo("Javascript");


//Array methods

const meses=["Enero","Febrero","Marzo","Abril","Mayo"];

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
meses.forEach((mes)=>{
    if(mes=="Marzo"){
        console.log("Marzo si existe");
    }
});

//some (ideal para arreglo de objetos)

resultado=carrito.some((producto)=>{
    return producto.nombre==="Celular"
})

//Para sumar todos los objetos del carrito
//Reduce
resultado=carrito.reduce((total,producto)=>{
    return total+producto.precio
},0)

//Filter
resultado=carrito.filter(producto=>producto.precio>400
)

console.log(resultado);

