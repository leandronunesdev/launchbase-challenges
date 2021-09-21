const express = require('express');
const routes = express.Router();
const recipe = require('./recipes');

const recipes = require('./data');

routes.get('/', function (req, res) {
  return res.render('index', { items: recipes });
});

routes.get('/recipes', function (req, res) {
  return res.render('recipes', { items: recipes });
});

routes.get('/recipes/:index', function (req, res) {
  const recipeIndex = req.params.index;

  if (!recipes[recipeIndex]) {
    return res.render('not-found');
  }

  return res.render('recipe', { item: recipes[recipeIndex] });
});

routes.get('/about', function (req, res) {
  return res.render('about');
});

routes.get('/admin/', function (req, res) {
  return res.render('admin');
});

routes.get('/admin/recipes/create', function (req, res) {
  return res.render('create');
});

routes.get('/admin/recipes/:id', recipe.show);

routes.get('/admin/recipes/:id/edit', recipe.edit);

routes.post('/admin/recipes', recipe.post);

routes.put('/admin/recipes', recipe.put);

routes.delete('/admin/recipes', recipe.delete);

module.exports = routes;
