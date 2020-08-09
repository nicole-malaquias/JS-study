var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var linhas = document.querySelectorAll(".paciente");

for(var i = 0; i< linhas.length; i++){

  var linha = linhas[i];

  var pesoTd = linha.querySelector(".info-peso");
  var peso = pesoTd.textContent;

  var alturaTd = linha.querySelector(".info-altura");
  var altura = alturaTd.textContent;

  var imcTd = linha.querySelector(".info-imc");



  
  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);



  if(! pesoEhValido ){

    console.log("Peso inválido!");
    imcTd.textContent = "Peso inválido";
    pesoEhValido = false;
    linha.classList.add("paciente-invalido");
  }

  if(! alturaEhValida ){

    console.log("Altura inválida!");
    imcTd.textContent = "Altura Inválida";
    alturaEhValida = false;
    linha.classList.add("paciente-invalido");

  }

  if(alturaEhValida && pesoEhValido){
    var imc = calculaImc(peso, altura);
    imcTd.textContent = imc;
  }
}

function calculaImc(peso, altura){
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso) {
  if( peso >= 0 && peso < 1000){
    return true;
  }else {
    return false;
  }
} 

function validaAltura(altura) {

  if(altura >= 0 && altura <= 3.0){
    return true;
  }else {
    return false;
  }
} 

