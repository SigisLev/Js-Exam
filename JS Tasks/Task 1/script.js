/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const search = document.getElementById('search');
  const resultContainer = document.getElementById('output');
  resultContainer.className = 'output-style';

  const lbOutput = document.createElement('div');
  const gramsOutput = document.createElement('div');
  const ozOutput = document.createElement('div');

  resultContainer.append(lbOutput, gramsOutput, ozOutput);

  lbOutput.textContent = 'Weight in lb: ' + search.value * 2.2046;
  gramsOutput.textContent = 'Weight in grams: ' + search.value / 0.001;
  ozOutput.textContent = 'Weight in oz: ' + search.value * 35.274;
});