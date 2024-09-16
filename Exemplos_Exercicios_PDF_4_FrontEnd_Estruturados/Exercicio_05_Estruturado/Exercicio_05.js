function exibirMultiplosDeTres() {
    let resultado = "";
    let contador = 0; // Contador para os múltiplos encontrados

    for (let i = 1; contador < 10; i++) {
        if (i % 3 === 0) { // Verifica se é múltiplo de 3
            resultado += `${i} `;
            contador++;
        }
    }

    // Exibe os resultados
    document.getElementById("resultado").innerText = "Os 10 primeiros múltiplos de 3 são: " + resultado;
}
