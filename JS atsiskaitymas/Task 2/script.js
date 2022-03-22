/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

let pressBtn = document.querySelector("#btn__element");
let countBtnClicks = 0;

pressBtn.addEventListener("click", function () {
  countBtnClicks += 1;
  document.querySelector("#btn__state").textContent = `
  Button was clicked ${countBtnClicks} times..
  `;
});
