const BTN_ENCONTRAR = document.querySelector("#encontrar");
const RESULTADO = document.querySelector("#container-resultado");
BTN_ENCONTRAR.addEventListener("click", (e) => {
  e.preventDefault();
  let fragmento = document.createDocumentFragment();
  let ladoA = document.querySelector("#ladoA").value;
  let ladoB = document.querySelector("#ladoB").value;
  if (ladoA === "" || ladoB === "") {
    alert("Por favor introduce un numero ");
    e.preventDefault();
  } else {
    let ladoANumber = parseInt(ladoA);
    let ladoBNumber = parseInt(ladoB);
    let resultadoA = Math.pow(ladoANumber, 2);
    let resultadoB = Math.pow(ladoBNumber, 2);
    let resultadoAMasB = resultadoA + resultadoB;
    let resultadoFinal = Math.round(Math.sqrt(resultadoAMasB));
    let ejercicio = document.createElement("P");
    ejercicio.innerHTML = `<span>H <sup>2</sup> =   A<sup>2</sup> + B <sup>2</sup> </span> <br> <br>
    <span>H <sup>2</sup> =   ${ladoANumber}<sup>2</sup> + ${ladoBNumber} <sup>2</sup> </span> <br> <br>
    <span>H <sup>2</sup> =   ${resultadoA} + ${resultadoB} </span> <br> <br>
    <span>H <sup>2</sup> =   &radic; ${resultadoAMasB} </span> <br> <br>
    <span>H <sup>2</sup> =  ${resultadoFinal} </span> <br> <br>`;
    fragmento.appendChild(ejercicio);
    RESULTADO.appendChild(fragmento);
    BTN_ENCONTRAR.value = "Limpiar";
    BTN_ENCONTRAR.addEventListener("click", () => location.reload());
  }
});
const WHTASAPP = document.querySelector("#wtsa-img");
WHTASAPP.addEventListener(
  "click",
  () => (location.href = " https://wa.me/573145073538")
);
