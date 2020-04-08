function validaGET(id){
	if(id == null || id == ""){
		alert('Se debe completar el campo ID.');
		return false;
	}
	return true;
}

function validaPOST(nombre, apellidos, dni, edad){
	validado = true;
	
	if(nombre == null || nombre == ""){
		alert('Se debe completar el campo Nombre.');
		validado = false;
	}
	if(apellidos == null || apellidos == ""){
		alert('Se debe completar el campo Apellidos.');
		validado = false;
	}
	if(dni == null || dni == ""){
		alert('Se debe completar el campo DNI.');
		validado = false;
	}
	if(edad == null || edad == ""){
		alert('Se debe completar el campo Edad.');
		validado = false;
	}
	
	return validado;
}

function validaPUT(id, nombre, apellidos, dni, edad){
	validado = true;
	
	if(id == null || id == ""){
		alert('Se debe completar el campo ID.');
		validado = false;
	}
	if(nombre == null || nombre == ""){
		alert('Se debe completar el campo Nombre.');
		validado = false;
	}
	if(apellidos == null || apellidos == ""){
		alert('Se debe completar el campo Apellidos.');
		validado = false;
	}
	if(dni == null || dni == ""){
		alert('Se debe completar el campo DNI.');
		validado = false;
	}
	if(edad == null || edad == ""){
		alert('Se debe completar el campo Edad.');
		validado = false;
	}
	
	return validado;
}

function validaDELETE(id){
	if(id == null || id == ""){
		alert('Se debe completar el campo ID.');
		return false;
	}
	return true;
}