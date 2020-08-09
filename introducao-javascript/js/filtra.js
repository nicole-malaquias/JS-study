// criando uma busca pelo nome //

var campoFiltro = document.querySelector("#filtrar-tabela");  // pega o que foi digitado no campo do input 

campoFiltro.addEventListener("input", function(){
	console.log(this.value);
	var listaPaciente = document.querySelectorAll(".paciente");

	if(this.value.length >0){

		for(var i =0; i < listaPaciente.length; i++){
			var paciente = listaPaciente[i];  //dentro de uma linha tr / que é um paciente /
			var tdNome = paciente.querySelector(".info-nome"); // dentro da class paciente procura a td nome
			var nome = tdNome.textContent;  //extrair o texto 
			var expressao = new RegExp(this.value, "i");  // 
			if(! expressao.test(nome)){
				paciente.classList.add("invisivel");
			}else{ paciente.classList.remove("invisivel");

			}
		}
	}else{
		for(var i=0; i < paciente.length;i++){
			var paciente = paciente[i];
			paciente.classList.remove("invisivel");
		}
	}		
		
	
});
