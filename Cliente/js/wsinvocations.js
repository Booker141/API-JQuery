//Boton de prueba
function getHello(){
	$.ajax({
		type: "GET",
		url: "http://localhost:8080/",
		success: function(data){
			$("#result").html(data);
		},
		error: function(res){
			alert("ERROR: " + res.statusText);
		}
	});
}

//Boton "Consultar asistente"
function getPerson(){
	id = document.getElementById("ID").value;
	if(validaGET(id)){
		$.ajax({
			type: "GET",
			dataType: "json",
			url: "http://localhost:8080/audience/"+id,
			success: function(data){
				if(data.length == 0){
					$("#result").html("No existen asistentes con el ID indicado");
					$("#data").html("");
				} else {
					$("#result").html("Hallado el siguiente asistente:");
					$("#data").html("<strong>Nombre</strong>: " + data[0]["Nombre"] + "<br>" + "<strong>Apellidos</strong>: " + data[0]["Apellidos"] + "<br>" + "<strong>DNI</strong>: " + data[0]["DNI"] + "<br>" + "<strong>Edad</strong>: " + data[0]["Edad"] + "<br><br>");
				}
			},
			error: function(res){
				alert("ERROR: " + res.statusText);
			}
		});
	}
}

//Boton "Añadir asistente"
function addPerson(){
	nombre = document.getElementById("Nombre").value;
	apellidos = document.getElementById("Apellidos").value;
	dni = document.getElementById("DNI").value;
	edad = document.getElementById("Edad").value;
	if(validaPOST(nombre, apellidos, dni, edad)){
		$.ajax({
			type: "POST",
			url: "http://localhost:8080/audience/",
			contentType: "application/json",
			dataType: "text",
			data: JSON.stringify({
				"Nombre": nombre,
				"Apellidos": apellidos,
				"DNI": dni,
				"Edad": edad
			}),
			success: function(){
				$("#result").html("Se ha añadido con éxito el siguiente asistente:");
				$("#data").html("<strong>Nombre</strong>: " + nombre + "<br>" + "<strong>Apellidos</strong>: " + apellidos + "<br>" + "<strong>DNI</strong>: " + dni + "<br>" + "<strong>Edad</strong>: " + edad + "<br><br>");
			},
			error: function(res){
				alert("ERROR: " + res.statusText);
			}
		});
	}
}

//Boton "Lista de asistentes"
function getAudience(){
	$.ajax({
		type: "GET",
		dataType: "json",
		url: "http://localhost:8080/audience/",
		success: function(data){ 
			var output = "";
			for(var i = 0; i<data.length; i++) {
				output = output +
				"<strong>ID</strong>: " + data[i]["_id"] + "<br>" +
				"<strong>Nombre</strong>: " + data[i]["Nombre"] + "<br>" + "<strong>Apellidos</strong>: " + data[i]["Apellidos"] + "<br>" + "<strong>DNI</strong>: " + data[i]["DNI"] + "<br>" + "<strong>Edad</strong>: " + data[i]["Edad"] + "<br><br>";
			}
			$("#result").html("Se han hallado los siguientes asistentes:");
			$("#data").html(output);
		},
		error: function(res){ alert("ERROR: " + res.statusText); }
	});
}

//Boton "Modificar asistente"
function updatePerson(){
	id = document.getElementById("ID").value;
	nombre = document.getElementById("Nombre").value;
	apellidos = document.getElementById("Apellidos").value;
	dni = document.getElementById("DNI").value;
	edad = document.getElementById("Edad").value;
	if(validaPUT(id, nombre, apellidos, dni, edad)){
		$.ajax({
			type: "GET",
			dataType: "json",
			url: "http://localhost:8080/audience/"+id,
			success: function(data){
				if(data.length == 0){
					$("#result").html("No existen asistentes con el ID indicado");
					$("#data").html("");
				} else {
					$.ajax({
						type: "PUT",
						dataType: "json",
						url: "http://localhost:8080/audience/"+id,
						contentType: "application/json",
						dataType: "text",
						data: JSON.stringify({
							"Nombre": nombre,
							"Apellidos": apellidos,
							"DNI": dni,
							"Edad": edad
						}),
						success: function(){
							$("#result").html("Modificación exitosa:");
							$("#data").html("<strong>Nombre</strong>: " + nombre + "<br>" + "<strong>Apellidos</strong>: " + apellidos + "<br>" + "<strong>DNI</strong>: " + dni + "<br>" + "<strong>Edad</strong>: " + edad + "<br><br>");
						},
						error: function(res){
							alert("ERROR: " + res.statusText);
						}
					});
				}
			},
			error: function(res){
				alert("ERROR: " + res.statusText);
			}
		});
	}
}

//Boton "Eliminar asistente"
function deletePerson(){
	id = document.getElementById("ID").value;
	if(validaDELETE(id)){
		$.ajax({
			type: "GET",
			dataType: "json",
			url: "http://localhost:8080/audience/"+id,
			success: function(data){
				if(data.length == 0){
					$("#result").html("No existen asistentes con el ID indicado");
					$("#data").html("");
				} else {
					$.ajax({
						type: "DELETE",
						dataType: "json",
						url: "http://localhost:8080/audience/"+id,
						success: function(){
							$("#result").html("Se ha eliminado al asistente con ID: "+id);
							$("#data").html("");
						},
						error: function(res){
							alert("ERROR: " + res.statusText);
						}
					});
				}
			},
			error: function(res){
				alert("ERROR: " + res.statusText);
			}
		});
	}
}

//Boton "Eliminar todos los asistentes"
function deleteAudience(){
	$.ajax({
		type: "DELETE",
		dataType: "json",
		url: "http://localhost:8080/audience/",
		success: function(){
			$("#result").html("Se han eliminado todos los asistentes");
			$("#data").html("");
		},
		error: function(res){
			alert("ERROR: " + res.statusText);
		}
	});
}