// Variáveis
let peso, altura, imc

function calcularIMC() {
    // entarada
    peso = Number(document.getElementById('txtPeso').value)
    altura = Number(document.getElementById('txtAltura').value)
    
    // processamento
    imc = peso / (altura * altura)
    // Saida
    document.getElementById('txtIMC').value = imc.toFixed(2)
}
