const botaoBuscarPacientes = document.querySelector("#buscar-pacientes");

botaoBuscarPacientes.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function () {
    const resposta = xhr.responseText;
    const pacientes = JSON.parse(resposta);
    pacientes.forEach((pacientes) => {
      adicionaPacienteNaTela(pacientes);
    });
  });
  xhr.send();
});
