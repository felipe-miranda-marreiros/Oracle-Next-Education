const listaParaRemoverPacientes = document.querySelectorAll(".paciente");

const tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
  event.target.parentNode.remove();
});
