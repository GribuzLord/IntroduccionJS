//POO

//Object literal
const producto={
    nombre:"Tablet",
    precio:500
}

//Object constructor
function Cliente(nombre,apellido){
    this.nombre=nombre;
    this.apellido=apellido;
}

//Prototype nos deja crear funciones que solo se utilizan en un objeto especifico
Cliente.prototype.formatoCliente=function(){
    return `El cliente ${this.nombre} ${this.apellido}`;
}

function Producto(nombre,precio,disponible){
    this.nombre=nombre;
    this.precio=precio;
    this.disponible=disponible;
}

//Prototype nos deja crear funciones que solo se utilizan en un objeto especifico
Producto.prototype.formatoProduc=function(){
    return `El producto ${this.nombre} tiene un precio de $${this.precio}`;
}

const producto2=new Producto("Monitor curvo de 49",800,false);
const producto3=new Producto("Laptop",30,true);
const producto4=new Producto("Sasha",30000000,false);
const producto5=new Producto("Solchesito 7",700,true);

const cliente=new Cliente("Dylan","Gomez");

console.log(cliente.formatoCliente());


console.log(producto2.formatoProduc());
console.log(producto3.formatoProduc());
console.log(producto4);
console.log(producto5);




