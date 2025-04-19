const metodoPago='cheque';

switch(metodoPago){
    case 'tarjeta':
        console.log("Pagaste con tarjeta");
        break;
    case 'cheque':
        console.log("El usuario va a pagar con cheque, vamos a ver si si le sabe");
        break;
    case 'efectivo':
        console.log("Pagaste con efectivo");
        break;
    default:
        console.log("Aun no has pagado");
        break;
}