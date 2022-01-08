const pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

  const paciente = pacientes[i];

  const tdPeso = paciente.querySelector(".info-peso");
  const peso = tdPeso.textContent;

  const tdAltura = paciente.querySelector(".info-altura");
  const altura = tdAltura.textContent;

  const tdImc = paciente.querySelector(".info-imc");

  const pesoEhValido = true;
  const alturaEhValida = true;

  if (peso <= 0 || peso >= 1000) {
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido";
  }

  if (altura <= 0 || altura >= 3.0) {
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida";
  }

  if (alturaEhValida && pesoEhValido) {
    const imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }
}
