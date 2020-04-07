function validaGET(){
	ID = document.getElementById("ID").value;
	
	if(ID == null || ID == ""){
		alert('Se debe completar el campo ID.');
		return false;
	}
	return true;
}

function validaPOST(){
	nombre = document.getElementById("Nombre").value;
	apellidos = document.getElementById("Apellidos").value;
	dni = document.getElementById("DNI").value;
	edad = document.getElementById("Edad").value;
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

function validaPUT(){
	ID = document.getElementById("ID").value;
	nombre = document.getElementById("Nombre").value;
	apellidos = document.getElementById("Apellidos").value;
	dni = document.getElementById("DNI").value;
	edad = document.getElementById("Edad").value;
	validado = true;
	
	if(ID == null || ID == ""){
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

function validaDELETE(){
	ID = document.getElementById("ID").value;
	
	if(ID == null || ID == ""){
		alert('Se debe completar el campo ID.');
		return false;
	}
	return true;
}