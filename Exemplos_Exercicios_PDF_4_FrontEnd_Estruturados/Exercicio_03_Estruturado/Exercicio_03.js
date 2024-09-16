function calcular() {
    // Solicita os dois valores
    let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    let valor2 = parseFloat(prompt("Digite o segundo valor:"));
    let operacao = prompt("Digite a operação desejada (+, -, *, /):");
    let resultado;

    // Verifica a operação e executa a correspondente
    if (operacao === '+') {
        resultado = valor1 + valor2;
    } else if (operacao === '-') {
        resultado = valor1 - valor2;
    } else if (operacao === '*') {
        resultado = valor1 * valor2;
    } else if (operacao === '/') {
        if (valor2 !== 0) {
            resultado = valor1 / valor2;
        } else {
            alert("Erro: Divisão por zero não é permitida.");
            return;
        }
    } else {
        alert("Operação inválida. Por favor, insira uma operação válida (+, -, *, /).");
        return;
    }

    // Exibe o resultado
    alert("O resultado é: " + resultado);
}
