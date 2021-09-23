const fs = require('fs');
const data = require('./data.json');

exports.home = function (req, res) {
  return res.render('index', { recipes: data.recipes });
};

exports.list = function (req, res) {
  return res.render('recipes', { recipes: data.recipes });
};

exports.detail = function (req, res) {
  const { id } = req.params;

  const foundRecipe = data.recipes.find(function (recipe) {
    return recipe.id == id;
  });

  if (!foundRecipe) return res.send('Recipe not found');

  return res.render('recipe', { recipe: foundRecipe });
};

exports.index = function (req, res) {
  return res.render('admin', { recipes: data.recipes });
};

//show
exports.show = function (req, res) {
  const { id } = req.params;

  const foundRecipe = data.recipes.find(function (recipe) {
    return recipe.id == id;
  });

  if (!foundRecipe) return res.send('Recipe not found');

  return res.render('show', { recipe: foundRecipe });
};

// create
exports.post = function (req, res) {
  const keys = Object.keys(req.body);

  for (key of keys) {
    if (req.body[key] == '') {
      return res.send('Por favor, preencha ao menos um ingrediente');
    }
  }

  let { image, title, author, ingredients, preparation, information } =
    req.body;

  const id = Number(data.recipes.length + 1);

  data.recipes.push({
    id,
    image,
    title,
    author,
    ingredients,
    preparation,
    information,
  });

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send('Write file error!');

    return res.redirect('/recipes');
  });
};

// edit

exports.edit = function (req, res) {
  const { id } = req.params;

  const foundRecipe = data.recipes.find(function (recipe) {
    return recipe.id == id;
  });

  if (!foundRecipe) return res.send('Recipe not found');

  return res.render('edit', { recipe: foundRecipe });
};

// put
exports.put = function (req, res) {
  const { id } = req.body;
  let index = 0;

  const foundRecipe = data.recipes.find(function (recipe, foundIndex) {
    if (id == recipe.id) {
      index = foundIndex;
      return true;
    }
  });

  if (!foundRecipe) return res.send('Recipe not found');

  const recipe = {
    ...foundRecipe,
    ...req.body,
  };

  data.recipes[index] = recipe;

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send('Write error!');

    return res.redirect(`/admin/recipes/${id}`);
  });
};
// delete

exports.delete = function (req, res) {
  const { id } = req.body;

  const filteredRecipes = data.recipes.filter(function (recipe) {
    return recipe.id != id;
  });

  data.recipes = filteredRecipes;

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
    if (err) return res.send('Write file error');

    return res.redirect('/admin');
  });
};
