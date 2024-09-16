function gerarTabuada() {
    let numero = parseInt(prompt("Digite um número inteiro para gerar a tabuada:"));
    if (isNaN(numero)) {
        alert("Por favor, insira um número válido.");
        return;
    }
    let resultado = "";

    // Usando while
    let i = 1;
    while (i <= 10) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
        i++;
    }
    resultado += "\n"; // Adiciona um espaço para separação

    // Usando do...while
    i = 1;
    do {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
        i++;
    } while (i <= 10);
    resultado += "\n"; // Adiciona um espaço para separação

    // Usando for
    for (i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }

    // Exibe o resultado
    alert(`Tabuada do ${numero}:\n\n${resultado}`);
}
