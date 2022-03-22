/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  constructor() {}
  sum = (sk1, sk2) => {
    let sudetis = sk1 + sk2;
    return sudetis;
  };
  subtraction = (sk1, sk2) => {
    let atimtis = sk1 - sk2;
    return atimtis;
  };
  multiplication = (sk1, sk2) => {
    let daugyba = sk1 * sk2;
    return daugyba;
  };
  division = (sk1, sk2) => {
    let dalyba = sk1 / sk2;
    return dalyba;
  };
}

// Metodas: sudėtis
let sudetis = new Calculator();
console.log(sudetis.sum(5, 5));

// Metodas: atimtis
let atimtis = new Calculator();
console.log(atimtis.subtraction(20, 15));

// Metodas: daugyba
let daugyba = new Calculator();
console.log(daugyba.multiplication(10, 10));

// Metodas: dalyba
let dalyba = new Calculator();
console.log(dalyba.division(100, 5));
