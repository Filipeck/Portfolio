let calcular = document.getElementById("calcular");



function imc() {
    let nome = document.getElementById("nome").value;
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let resultado = document.getElementById("resultado");

    if(nome !== '' && altura !== '' && peso !== ''){

        const valorIMC = (peso /(altura * altura));

        resultado.textContent = valorIMC;
    }else {
        resultado.textContent = 'Por favor, preencha todos os campos para calcular o IMC!!!';
    }

}

calcular.addEventListener('click', imc);