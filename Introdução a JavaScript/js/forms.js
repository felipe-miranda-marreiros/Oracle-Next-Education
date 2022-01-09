const botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  const form = document.querySelector("#form-adiciona");

  const paciente = obtemPacienteDoFormulario(form);

  const pacienteTr = montaTr(paciente);

  const erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibirMensagensDeErro(erros);
    return;
  }

  const tabela = document.querySelector("#tabela-pacientes");

  if (!validaPaciente(paciente)) {
    console.log("Paciente inválido");
    return;
  }

  tabela.appendChild(pacienteTr);
  form.reset();
  const mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
});

function exibirMensagensDeErro(erros) {
  const ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  erros.forEach(function (erro) {
    const li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

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

  if (paciente.nome.length == 0) {
    erros.push("O nome não pode ser em branco");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é inválido");
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("Altura inválida");
  }
  if (paciente.gordura.length == 0) {
    erros.push("A gordura não pode ser em branco");
  }
  if (paciente.peso.length == 0) {
    erros.push("O pesso não pode ser em branco");
  }
  if (paciente.altura.length == 0) {
    erros.push("Altura não pode ser em branco");
  }

  return erros;
}
