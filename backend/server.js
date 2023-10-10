const express = require('express')
const app = express()

var port = 30000
var caminho_index = "/workspaces/newfashion/index.html"
var caminho_relativo = "/workspaces/newfashion/frontend/"

app.get("/", function(req, res){
    res.sendFile(caminho_index)
})
app.get("/todos", function(req, res){
    res.sendFile(caminho_relativo + "todos.html")
})

app.get("/promocao", function(req, res){
    res.sendFile(caminho_relativo + "promocao.html")
})

app.get("/carrinho", function(req, res){
    res.sendFile(caminho_relativo + "carrinho.html")
})
app.get("/login", function(req, res){
    res.sendFile(caminho_relativo + "login.html")
})
app.get("/cadrastar", function(req, res){
    res.sendFile(caminho_relativo + "cadrastar.html")
})

app.listen(port, function() { console.log ("servidor rodando na porta " + port + "." ) })