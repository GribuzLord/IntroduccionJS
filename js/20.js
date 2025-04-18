//Metodos de propiedad

const reproductor={
    reproducir:function(id){
        console.log(`Reproduciendo cancion con el ID: ${id}`);
    },
    pausar: function(){
        console.log("Pausando...");
    },
    crearPlaylist:function(nombre){
            console.log(`Creando la playlist ${nombre}`)
    },
    reproducirPlaylist:function(nombre){
        console.log(`Reproduciendo la playlist ${nombre}`)
    }
}

console.log(reproductor);

reproductor.borrarCancion=function(id){
    console.log(`Eliminando la cancion: ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(29);
reproductor.crearPlaylist("Heavy metal");
reproductor.reproducirPlaylist("Heavy motal");