const express = require('express')
const app = express()

app.get("/", function(req, res){
    res.sendFile("/../frontend/index.html")
})
app.get("/todos", function(req, res){
    res.sendFile("/../frontend/todos.html")
})

app.get("/promocao", function(req, res){
    res.sendFile("/../frontend/promocao.html")
})

app.get("/carrinho", function(req, res){
    res.sendFile("/../frontend/carrinho.html")
})
app.get("/login", function(req, res){
    res.sendFile("/../frontend/login.html")
})
app.get("/cadrastar", function(req, res){
    res.sendFile("/../frontend/cadrastar.html")
})

app.listen(14780, function() { console.log ("servidor rodando na porta 14780.") })