

var botaoAdiciona = document.querySelector("#buscar-pacientes"); // dicionando paciente //


botaoAdiciona.addEventListener("click", function(){

	var xhr = new XMLHttpRequest();

	xhr.open("GET","https://api-pacientes.herokuapp.com/pacienddtes");

	
	xhr.addEventListener("load", function(){
		var erroAjax = document.querySelector("Erro-ajax");
		if (xhr.status ==200){
			erroAjax.classList.add("invisivel");	
			var resposta = xhr.responseText;
			var paciente = JSON.parse(resposta);

			pacientes.forEach( function(paciente){
			adicionaPacienteNaTabela(paciente);
		});

		}else{
			console.log(xhr.status);
			console.log(xhr.responseText);
			erroAjax.classList.remove("invisivel");  //deixa invisivel //
		}	

    });
	xhr.send()
	
});