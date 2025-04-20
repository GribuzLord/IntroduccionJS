//POO

//Object literal
const producto={
    nombre:"Tablet",
    precio:500
}

//Object constructor
function Producto(nombre,precio,disponible){
    this.nombre=nombre;
    this.precio=precio;
    this.disponible=disponible;
}

const producto2=new Producto("Monitor curvo de 49",800,false);
const producto3=new Producto("Laptop",30,true);
const producto4=new Producto("Sasha",30000000,false);
const producto5=new Producto("Solchesito 7",700,true);

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);