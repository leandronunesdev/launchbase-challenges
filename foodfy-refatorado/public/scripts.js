const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

function hideShow() {
  var x = document.getElementById('hide-show');
  var y = document.getElementById('hide-button');
  if (x.style.display === 'none') {
    x.style.display = 'block';
    y.innerHTML = 'Esconder';
  } else {
    x.style.display = 'none';
    y.innerHTML = 'Mostrar';
  }
}

function hideShow2() {
  var x = document.getElementById('hide-show2');
  var y = document.getElementById('hide-button2');
  if (x.style.display === 'none') {
    x.style.display = 'block';
    y.innerHTML = 'Esconder';
  } else {
    x.style.display = 'none';
    y.innerHTML = 'Mostrar';
  }
}

function hideShow3() {
  var x = document.getElementById('hide-show3');
  var y = document.getElementById('hide-button3');
  if (x.style.display === 'none') {
    x.style.display = 'block';
    y.innerHTML = 'Esconder';
  } else {
    x.style.display = 'none';
    y.innerHTML = 'Mostrar';
  }
}

//  CREATE RECIPE

function addIngredient() {
  const ingredients = document.querySelector('#ingredients');
  const fieldContainer = document.querySelectorAll('.ingredient');

  // Realiza um clone do último ingrediente adicionado
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == '') return false;

  // Deixa o valor do input vazio
  newField.children[0].value = '';
  ingredients.appendChild(newField);
}

document
  .querySelector('.add-ingredient')
  .addEventListener('click', addIngredient);

function addStep() {
  const steps = document.querySelector('#steps');
  const fieldContainer = document.querySelectorAll('.step');

  // Realiza um clone do último ingrediente adicionado
  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  // Não adiciona um novo input se o último tem um valor vazio
  if (newField.children[0].value == '') return false;

  // Deixa o valor do input vazio
  newField.children[0].value = '';
  steps.appendChild(newField);
}

document.querySelector('.add-step').addEventListener('click', addStep);
