const listaParaRemoverPacientes = document.querySelectorAll(".paciente");

listaParaRemoverPacientes.forEach(function (paciente) {
  paciente.addEventListener("dblclick", function () {
    this.remove();
  });
});
