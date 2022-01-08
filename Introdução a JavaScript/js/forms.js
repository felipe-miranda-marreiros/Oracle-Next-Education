const botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  const form = document.querySelector("#form-adiciona");

  const paciente = obtemPacienteDoFormulario(form);

  const pacienteTr = montaTr(paciente);
  
  const tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);
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

  const nomeTd = document.createElement("td");
  const pesoTd = document.createElement("td");
  const alturaTd = document.createElement("td");
  const gorduraTd = document.createElement("td");
  const imcTd = document.createElement("td");

  nomeTd.textContent = paciente.nome;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);
  pacienteTr.appendChild(imcTd);

  return pacienteTr;
}
