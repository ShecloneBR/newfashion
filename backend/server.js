const express = require('express')
const app = express()

app.get("/", function(req, res){
    res.sendFile("/workspaces/newfashion/index.html")
})

app.listen(14780, function(){ console.log ("servidor rodando na porta 14780.")})