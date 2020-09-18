const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const subjects = require("./data")

server.use(express.static('public'))
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    const about = {
        avatar_url: "https://avatars0.githubusercontent.com/u/28929274?s=200&v=4",
        name: "Rocketseat",
        description: "Somos uma empresa especializada em conteúdo educacional para desenvolvedores",
        tech_title: "Principais Tecnologias:",
        techs:[
            {name: "HTML"},
            {name: "CSS"},
            {name: "JavaScript"},
            {name: "React"}
        ],
        links: [
            {name: "Github", url: "https://github.com/Rocketseat"},
            {name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br"},
            {name: "Facebook", url: "https://www.facebook.com/rocketseat/"}
        ]        
    }
    return res.render("about", {about})
})

server.get("/courses", function(req, res){
    return res.render("courses", { items: subjects})
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;

    const course = subjects.find(function(course){
        if (course.id == id){
            return true
        }
    })

    if (!course){
        return res.send ("Course not found!")
    }
  
    return res.render("course", { item: course })
  })

server.use(function(req, res) {
    res.status(404).render("not-found");
  })

server.listen(5000, function(){
    console.log("Server is running")
})