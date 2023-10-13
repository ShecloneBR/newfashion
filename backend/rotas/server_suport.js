const express = require('express')
const rota = express.Router()

rota.get("/item/:classe/:nome/:tamanho", function(req, res){
        /* codigo da rota */ 
})

module.exports = rota 