// function sumar(n1,n2){
//     return n1+n2;
// }

// const resultado=sumar(2,3);

// console.log(resultado)

let total=0;

function agregar_carrito(precio){
    return total += precio

}

function calcular_impuesto(total){
    return 1.15*total;
}

total=agregar_carrito(200);
total=agregar_carrito(400);
total=agregar_carrito(600);

console.log(total);

const totalAPAgar=calcular_impuesto(total);

console.log(`El total a pagar con impuestos es de: $${totalAPAgar}`);