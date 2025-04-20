//Classes

class Producto{
    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }

    formatearProduc(){
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
    }

    precioProduc(){
        return `El producto tiene un precio de ${this.precio}`;
    }
}

const producto=new Producto("Monitor curvo",800);
const producto2=new Producto("Laptop",300);

console.log(producto);
console.log(producto2);
console.log(producto.formatearProduc());
console.log(producto2.precioProduc());

//Herencia
//Es una buena practica para evitar repetir codigo

class LIBRO extends Producto{
    constructor(nombre,precio,isbn){
        super(nombre,precio);
        this.isbn=isbn;
    }
    formatearProduc(){
        return `El libro ${this.nombre} tiene un precio de ${this.precio} y tiene el isbn ${this.isbn}`;
    }
}

const libro=new LIBRO("El principito",200,"563478");

console.log(libro);
console.log(libro.formatearProduc());