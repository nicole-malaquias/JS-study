

var botaoAdiciona = document.querySelector("#adicionar-paciente"); // adiciona um evento ao botão
botaoAdiciona.addEventListener("click", function(event){  // cria uma função quando clica no botão
	event.preventDefault(); // retira a função de form de limpar todo os campos quando aperta sent 

	var form = document.querySelector(".form-adiciona")

	var paciente = obtemPacienteDoForm(form);  // cria um objeto com os atributos dos input

	var erros = validaPaciente(paciente); // ve se o atributo peso é correto caso não gera uma mensagem de peso invalido
	var valorErro = erros.length
	console.log(valorErro );

	if(erros.length > 0){
		var mensagemErro = document.querySelector("#mensagem-erro");
		exibeMensagemDeErro(erros);
		return;
	}

	adicionaPacienteNaTabela(pacinete);

	form.reset();
	var mensagensErro = document.querySelector("#mensagem-erro");
	mensagensErro.innerHTML = "";
});


function adicionaPacienteNaTabela(paciente){
	var pacienteTr = montaTr(paciente);  // poem os atributos do objeto nas td
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);


}


function exibeMensagemDeErro(erros){
	var ul = document.querySelector("#mensagem-erro")
	ul.innerHTML = "";
	erros.forEach(function(erro){  // item dos erros 
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);  // adiciona dentro da ul 
	})

}


function obtemPacienteDoForm(form){
	var paciente ={
		nome : form.nome.value,
		peso : form.peso.value,
		altura : form.altura.value,
		gordura : form.gordura.value,
		imc : calculaImc(peso, altura)
	}
	return paciente;
}

function montaTr (paciente){

	var pacienteTr = document.createElement("tr");  //cria uma linha 
	pacienteTr.classList.add("pacinete");

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));  // adiciona o valor do input na td da tr 
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd (paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;

}

function montaTd(dado,classe ){
	var td = document.createElement("td");	  // cria cada celula da tabela 
	td.textContent = dado;
	td.classList.add(classe)

	return td;
}


function validaPaciente(paciente){
	var erros = [];

	if(!validaPeso(paciente.peso)){
		erros.push("peso é invalido");
	}
	if(!validaAltura(paciente.altura)){
		erros.push("altura é invalida");
	}
	if (paciente.nome.length == 0){
		erros.push("nome n pode ser em branco");
	}
//	if( pacinete.gordura == 0){
//		erros.push("gordura não pode ser em branco");
//	}
	return erros;
}

