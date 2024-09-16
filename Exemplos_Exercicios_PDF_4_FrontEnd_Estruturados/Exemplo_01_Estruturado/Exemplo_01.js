function verificarNota() {
    // Obtém o valor do campo de entrada
    let notaAluno = document.getElementById("nota").value;
    notaAluno = parseFloat(notaAluno); // Converte a entrada para número
    let resultado; // Variável para armazenar o resultado
    
    if (!isNaN(notaAluno)) { // Verifica se a entrada é um número
        if (notaAluno >= 60) {
            resultado = "Aprovado!";
        } else {
            resultado = "Reprovado!";
        }
    } else {
        resultado = "Por favor, insira um número válido para a nota.";
    }
    
    // Exibe o resultado na página
    document.getElementById("resultado").innerText = resultado;
}
