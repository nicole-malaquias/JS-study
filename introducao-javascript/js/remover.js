var pacientes = document.querySelectorAll(".paciente");  // SelectALl para selecionar todos 

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){  // event mostra quem foi clicado 
	var alvo = event.target; // alvo do evento 
	var paiDoEvento = alvo.parentNode.classList.add("fade-out");  // pai do paciente ( que seria o TR - a linha inteira )
	setTimeout(function(){  // segura a ação pela quantida de tempo estipulado apos a funçao 
		event.target.parentNode.remove();
	},500);

});