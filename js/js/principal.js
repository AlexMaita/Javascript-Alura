var titulo = document.querySelector(".titulo");		
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    
    // IMC
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    if (peso <= 0 || peso >= 500) {
        console.log("peso inválido");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido"
        paciente.classList.add("paciente-invalido");
    }
    
    if (altura <= 0 || altura >= 3.00) {
        console.log("altura inválida");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválido"
        paciente.classList.add("paciente-invalido");
    }
    
    
    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura) ;
        tdImc.textContent = imc.toFixed(2);
    }
    
}

// FORMULARIO
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr);
});