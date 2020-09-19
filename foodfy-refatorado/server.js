const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data")

server.use(express.static('public'))
server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    return res.render("index", {items: recipes})
})

server.get("/recipes", function(req, res){
    return res.render("recipes", {items: recipes})
})

server.get("/recipes/:index", function (req, res) {    
    const recipeIndex = req.params.index;

    return res.render("recipe")  
    console.log(recipes[recipeIndex])
  
    /*const recipe = recipes.find(function(recipe){
        if (recipe.recipeIndex == recipeIndex){
            return true
        }
    })

    if (!recipe) {
        return res.send("Recipe not found!")
    }

    return res.render("recipe", {item: recipe})*/
  })

server.get("/about", function(req, res){
    return res.render("about")
})

server.listen(5000, function(){
    console.log("Server is running")
})