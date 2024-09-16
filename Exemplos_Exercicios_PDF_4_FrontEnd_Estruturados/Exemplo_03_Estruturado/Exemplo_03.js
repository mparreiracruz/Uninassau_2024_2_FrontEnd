function verificarDia() {
    let resultado;
    const tentativas = 3; // Número de tentativas
    let diaNumero;

    // Loop for para o número de tentativas
    for (let i = 0; i < tentativas; i++) {
        diaNumero = parseInt(prompt("Digite um número de 1 a 7 para o dia da semana:"));

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
            // Exibe o resultado e sai do loop
            alert("Você digitou: " + resultado);
            break; // Sai do for após uma entrada válida
        } else {
            alert("Por favor, insira um número válido de 1 a 7.");
        }

        // Se for a última tentativa
        if (i === tentativas - 1) {
            alert("Você excedeu o número de tentativas.");
        }
    }
}
