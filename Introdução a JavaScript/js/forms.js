const botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  const form = document.querySelector("#form-adiciona");

  const paciente = obtemPacienteDoFormulario(form);

  const pacienteTr = montaTr(paciente);

  const erros = validaPaciente(paciente);

  if (erros.length > 0) {
    const mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.textContent = erros;
  }

  const tabela = document.querySelector("#tabela-pacientes");

  if (!validaPaciente(paciente)) {
    console.log("Paciente inválido");
    return;
  }

  tabela.appendChild(pacienteTr);
  form.reset();
});

function obtemPacienteDoFormulario(form) {
  const paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularIMC(form.peso.value, form.altura.value),
  };

  return paciente;
}

function montaTr(paciente) {
  const pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  const td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

function validaPaciente(paciente) {
  let erros = [];

  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é inválido");
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("Altura inválida");
  }

  return erros;
}
