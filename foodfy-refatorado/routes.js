const express = require('express');
const routes = express.Router();
const recipe = require('./recipes');

routes.get('/', recipe.home);

routes.get('/recipes', recipe.list);

routes.get('/recipes/:id', recipe.detail);

routes.get('/about', function (req, res) {
  return res.render('about');
});

routes.get('/admin/recipes', recipe.index);

routes.get('/admin/recipes/create', function (req, res) {
  return res.render('create');
});

routes.get('/admin/recipes/:id', recipe.show);

routes.get('/admin/recipes/:id/edit', recipe.edit);

routes.post('/admin/recipes', recipe.post);

routes.put('/admin/recipes', recipe.put);

routes.delete('/admin/recipes', recipe.delete);

module.exports = routes;
