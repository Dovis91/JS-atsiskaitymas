/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

fetch("cars.json")
  .then((res) => res.json())
  .then((data) => {
    let output = document.querySelector("#output");
    data.forEach((element) => {
      output.innerHTML += `
      <div class="mainDiv">
      <h2 class="brand">Brand: ${element.brand}</h2>
      <li class="models">Models: ${element.models.map(
        (modelis) => modelis
      )}</li>
      </div>
      `;
    });
  });
