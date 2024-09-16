function calcularIdade() {
    // Solicita o ano atual
    let anoAtual = parseInt(prompt("Digite o ano atual:"));
    if (isNaN(anoAtual)) {
      alert("Por favor, insira um ano válido.");
      return;
    }
  
    // Solicita o ano de nascimento
    let anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"));
    if (isNaN(anoNascimento)) {
      alert("Por favor, insira um ano de nascimento válido.");
      return;
    }
  
    // Calcula a idade
    let idade = anoAtual - anoNascimento;
  
    // Valida a idade
    if (idade < 0) {
      alert("Você ainda não nasceu!");
    } else {
      alert("Sua idade é: " + idade + " anos.");
    }
  }
  