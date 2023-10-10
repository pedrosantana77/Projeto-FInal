document.addEventListener("DOMContentLoaded", function () {
    // Adiciona um evento de clique ao botão "Agendar"
    var agendarButton = document.querySelector(".button2");
    agendarButton.addEventListener("click", function (event) {
      event.preventDefault(); // Evita o envio do formulário (comportamento padrão)
      
      // Obtém o valor da data de nascimento
      var dataNascimento = document.getElementById("dataNascimento").value;

      // Verifica se a data de nascimento foi preenchida
      if (dataNascimento) {
        // Exibe um alerta com a data agendada com sucesso
        alert("Data agendada com sucesso: " + dataNascimento);
      } else {
        // Exibe um alerta de erro se a data de nascimento não estiver preenchida
        alert("Por favor, escolha uma data de nascimento antes de agendar.");
      }
    });
  });