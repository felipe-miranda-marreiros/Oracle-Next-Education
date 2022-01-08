const pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  const paciente = pacientes[i];

  const tdPeso = paciente.querySelector(".info-peso");
  let peso = tdPeso.textContent;

  const tdAltura = paciente.querySelector(".info-altura");
  const altura = tdAltura.textContent;

  const tdImc = paciente.querySelector(".info-imc");

  let pesoEhValido = true;
  let alturaEhValida = true;

  if (peso <= 0 || peso >= 1000) {
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";

    paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3.0) {
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";

    paciente.classList.add("paciente-invalido");
  }

  if (alturaEhValida && pesoEhValido) {
    const imc = calcularIMC(peso, altura);
    tdImc.textContent = imc;
  }
}

function calcularIMC(peso, altura) {

  let imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
