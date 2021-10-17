// const modalOverlay = document.querySelector('.modal-overlay');

// PAGINATION
function paginate(selectedPage, totalPages) {
  let pages = [],
    oldPage;

  for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
    const firstAndLastPage = currentPage == 1 || currentPage == totalPages;
    const pagesAfterSelectedPage = currentPage <= selectedPage + 2;
    const pagesBeforeSelectedPage = currentPage >= selectedPage - 2;

    if (
      firstAndLastPage ||
      (pagesBeforeSelectedPage && pagesAfterSelectedPage)
    ) {
      if (oldPage && currentPage - oldPage > 2) {
        pages.push('...');
      }

      if (oldPage && currentPage - oldPage == 2) {
        pages.push(oldPage + 1);
      }

      pages.push(currentPage);

      oldPage = currentPage;
    }
  }
  return pages;
}

function createPagination(pagination) {
  const filter = pagination.dataset.filter;
  const page = +pagination.dataset.page;
  const total = +pagination.dataset.total;
  const pages = paginate(page, total);

  let elements = '';

  for (let page of pages) {
    if (String(page).includes('...')) {
      elements += `<span>${page}</span>`;
    } else {
      elements += `<a href="?page=${page}">${page}</a>`;
    }
  }

  pagination.innerHTML = elements;
}

const pagination = document.querySelector('.pagination');

if (pagination) {
  createPagination(pagination);
}

// HIDE AND SHOW

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

//  ADD INGREDIENT

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

const addIngredientOption = document.querySelector('.add-ingredient');

if (addIngredientOption) {
  addIngredientOption.addEventListener('click', addIngredient);
}
// document
//   .querySelector('.add-ingredient')
//   .addEventListener('click', addIngredient);

// ADD STEP

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

const addStepOption = document.querySelector('.add-step');

if (addStepOption) {
  addStepOption.addEventListener('click', addStep);
}

// document.querySelector('.add-step').addEventListener('click', addStep);
