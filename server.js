const express = require('express')
const app = express()

var port = 10100

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.get("/todos", function(req, res){
    res.sendFile(__dirname + "/frontend/todos.html")
})

app.get("/promocao", function(req, res){
    res.sendFile(__dirname + "/frontend/promocao.html")
})

app.get("/carrinho", function(req, res){
    res.sendFile(__dirname + "/frontend/carrinho.html")
})
app.get("/login", function(req, res){
    res.sendFile(__dirname + "/frontend/login.html")
})
app.get("/cadrastar", function(req, res){
    res.sendFile(__dirname + "/frontend/cadrastar.html")
})

app.get("/perfil", function(req, res){
    res.sendFile(__dirname + "/frontend/perfil.html")
})

app.get("/config", function(req, res){
    res.sendFile(__dirname + "/backend/config.html")
})

app.get("/item", function(req, res){
    res.sendFile(__dirname + "/frontend/item.html")
})

app.get("/pegar-cep", function(req, res){
    res.sendFile(__dirname + "/frontend/pegar_cep.html")
})

app.get("/insert_database", function(req, res){
    res.sendFile(__dirname + "/backend/insert_database.js")

})

app.get("/backend/entrada_items", function(req, res){
    res.sendFile(__dirname + "/backend/entrada.js")

})

app.listen(port, function(){
      console.log(`servidor rodando na porta ${port}. "http://localhost/${port}".`)
})





