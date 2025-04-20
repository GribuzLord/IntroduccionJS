//this

//this hace referecia a los valores de un mismo objeto
const reservacion={
    nombre:"Dylan",
    apellido:"Gomez",
    total:1000,
    pagado:false,
    info:function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.info();