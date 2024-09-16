function somaComFor() {
    let soma = 0;
    const tentativas = 5; // Número de tentativas
    for (let i = 0; i < tentativas; i++) {
        let numero = parseFloat(prompt("Digite um número para somar (tentativa " + (i + 1) + "):"));
        if (!isNaN(numero)) {
            soma += numero;
        } else {
            alert("Por favor, insira um número válido.");
            i--; // Mantém a contagem de tentativas
        }
    }
    alert("A soma total usando for é: " + soma);
}

function somaComWhile() {
    let soma = 0;
    let continuar = true;
    while (continuar) {
        let numero = parseFloat(prompt("Digite um número para somar (ou digite '0' para sair):"));
        if (numero === 0) {
            continuar = false;
        } else if (!isNaN(numero)) {
            soma += numero;
        } else {
            alert("Por favor, insira um número válido.");
        }
    }
    alert("A soma total usando while é: " + soma);
}

function somaComDoWhile() {
    let soma = 0;
    let continuar;
    do {
        let numero = parseFloat(prompt("Digite um número para somar (ou digite '0' para sair):"));
        if (numero === 0) {
            continuar = false;
        } else if (!isNaN(numero)) {
            soma += numero;
            continuar = true; // Continua a soma
        } else {
            alert("Por favor, insira um número válido.");
            continuar = true; // Permite o acidente de um número inválido
        }
    } while (continuar);
    alert("A soma total usando do...while é: " + soma);
}
