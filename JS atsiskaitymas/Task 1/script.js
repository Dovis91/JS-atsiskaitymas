/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector("#forma").addEventListener("submit", (e) => {
  e.preventDefault();
  let kg = Number(e.target.elements.search.value);
  let kgToPound = kg * 2.2046;
  let kgToGrams = kg / 0.001;
  let kgToOz = kg * 35.274;
  document.querySelector("#output").innerHTML = `
  <div>
  <h3 class="classH3"> Jūsų įvesti ${kg}kg į svarus bus: ${kgToPound} pounds </h3>
  <h3 class="classH3"> Jūsų įvesti ${kg}kg į gramus bus: ${kgToGrams} grams </h3>
  <h3 class="classH3"> Jūsų įvesti ${kg}kg į uncijas bus: ${kgToOz} Oz </h3>
  </div>
  `;
  kg = e.target.elements.search.value = null;
});
