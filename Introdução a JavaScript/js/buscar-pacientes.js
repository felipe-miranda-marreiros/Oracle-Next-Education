const botaoBuscarPacientes = document.querySelector("#buscar-pacientes");

botaoBuscarPacientes.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes1");

  xhr.addEventListener("load", function () {
    if (xhr.status == 200) {
      const resposta = xhr.responseText;
      const pacientes = JSON.parse(resposta);
      pacientes.forEach((pacientes) => {
        adicionaPacienteNaTela(pacientes);
      });
    } else {
      const erroAjax = document.querySelector("#erro-ajax");
      erroAjax.classList.toggle("invisivel");
    }
  });
  xhr.send();
});
