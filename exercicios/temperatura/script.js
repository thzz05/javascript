function converterTemperatura() {
    // Obter o valor em Fahrenheit do campo de entrada
    var fahrenheit = parseFloat(document.getElementById('fahrenheitInput').value);

    // Verificar se o valor é válido
    if (isNaN(fahrenheit)) {
        alert("Por favor, insira um número válido para a temperatura em Fahrenheit.");
        return;
    }

    // Converter Fahrenheit para Celsius
    var celsius = (fahrenheit - 32) * 5/9;

    // Exibir o resultado
    document.getElementById('resultado').innerHTML = fahrenheit + " Fahrenheit equivalem a " + celsius.toFixed(2) + " Celsius.";
}
