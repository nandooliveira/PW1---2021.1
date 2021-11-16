var botao = document.getElementById("botao");

function calcularImc(event) {
    event.preventDefault();

    var inputAltura = document.getElementById("altura");
    var inputPeso = document.getElementById("peso");

    var altura = inputAltura.value / 100.0;
    var peso = inputPeso.value;

    var imc = peso / (altura * altura);

    var classificacao = "";
    
    if(imc < 18.5) {
        classificacao = "Abaixo do Peso";
    } else if (imc > 18.5 && imc < 25) {
        classificacao = "Peso Ideal";
    } else if (imc >= 25 && imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        classificacao = "Obesidade Nível 1";
    } else if (imc >= 35 && imc < 40) {
        classificacao = "Obesidade Nível 2";
    } else {
        classificacao = "Obesidade Grave!"
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = `${classificacao} IMC ${imc}`;
}

botao.addEventListener("click", calcularImc);
