/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch('./cars.json')
  .then((response) => response.json())
  .then((data) => {
    renderCars(data);
  });

function renderCars(cars) {
  const outputContainer = document.getElementById('output');
  const carsContainer = document.createElement('div');
  carsContainer.className = 'cars-container';

  cars.forEach((car) => {
    const carCard = document.createElement('div');
    carCard.className = 'card';

    const carBrand = document.createElement('h3');
    const carModel = document.createElement('h5');

    carBrand.textContent = car.brand;
    carModel.textContent = car.models;

    outputContainer.append(carsContainer);
    carsContainer.append(carCard);
    carCard.append(carBrand, carModel);
  });
}
