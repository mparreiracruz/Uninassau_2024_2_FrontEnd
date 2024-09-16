function verificarDia() {
    let diaNumero;
    let resultado = "";

    // Loop enquanto o diaNúmero não for 0
    while (true) {
        diaNumero = prompt("Digite um número de 1 a 7 para o dia da semana (ou 0 para sair):");
        // Converte a entrada para número inteiro
        diaNumero = parseInt(diaNumero); 
        // Condição para sair do loop
        if (diaNumero === 0) {
            resultado = "Saindo...";
            break;
        }
        // Verifica se a entrada é um número válido
        if (!isNaN(diaNumero) && diaNumero >= 1 && diaNumero <= 7) {
            // Usando switch case para determinar o dia da semana
            switch (diaNumero) {
                case 1:
                    resultado = "Domingo";
                    break;
                case 2:
                    resultado = "Segunda-feira";
                    break;
                case 3:
                    resultado = "Terça-feira";
                    break;
                case 4:
                    resultado = "Quarta-feira";
                    break;
                case 5:
                    resultado = "Quinta-feira";
                    break;
                case 6:
                    resultado = "Sexta-feira";
                    break;
                case 7:
                    resultado = "Sábado";
                    break;
            }
        } else {
            resultado = "Por favor, insira um número válido de 1 a 7.";
        }
        // Exibe o resultado
        alert(resultado);
    }
    // Exibe a mensagem de saída
    alert(resultado);
}
