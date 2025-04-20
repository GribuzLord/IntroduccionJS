const carrito=[
    {nombre: "Monitor 20 pugadas", precio: 500},
    {nombre: "Television 50 pugadas", precio: 700},
    {nombre: "Tablet", precio: 300},
    {nombre: "Audifonos", precio: 200},
    {nombre: "Teclado", precio: 50},
    {nombre: "Celular", precio: 500},
    {nombre: "Bocinas", precio: 300},
    {nombre: "Laptop", precio: 800},
];

//Se utilizan unicamente en arreglos

//For each 
//Va recorriendo elemento por elemento en cada posicion del arreglo
carrito.forEach(producto=> console.log("Nombre: ",producto.nombre, " Precio:",producto.precio));

//map
carrito.map(producto=> console.log("Nombre: ",producto.nombre, " Precio:",producto.precio));

//Ambos hacen lo mismo pero map aparte de iterar sobre cada uno crea un nuevo arreglo
//Foreach es mas paar mostrar resultados y para crear un nuevo arreglo se usa map