//funcion para preguntar ubicación al usuario
function buscar(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(found, notFound);
	}
}

window.addEventListener("load", buscar); //una vez que cargue la página (o app en este caso), se echa a andar la función buscar

var latitud, longitud;

var found = function(posicion){ //entrega la posición del usuario
	latitud = posicion.coords.latitude;
	longitud = posicion.coords.longitude;
}

var notFound = function(error){// en caso de no encontrar la ubicación del usuario, entrega un alert con un msj
	alert ("No pudimos encontrar tu ubicación");
}
