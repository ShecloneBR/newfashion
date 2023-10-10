import "database.sql"

validar = document.getElementById("validar")
validar.addEventListener('click', function(){ 
    const erro = document.getElementById("erro")
    if(valor_promocao < valor_produto){
        erro.innerHTML = "isso é realmente uma promoção?"       
    } else{
        erro.innerHTML = "Valor atualizado com sucesso!"
    }

    
})


buscar = document.getElementById("buscar")
buscar.addEventListener('click', function(){ 
    const id_item = document.getElementById("id_item")
    const erro_item = document.getElementById("erro_item")
    const id_nome = document.getElementById("nome")
    const id_valor = document.getElementById("valor")

    if (id_item == object_item.ref){
        id_nome.innerHTML = object_item.nome
        id_valor.innerHTML = object_item.valor
        
    } else {
        erro_item.innerHTML = "Referencia não existe no database"
    }
  
})

function limpar(){
    const id_item = document.getElementById("id_item")
    const erro_item = document.getElementById("erro_item")
    const id_nome = document.getElementById("nome")
    const id_valor = document.getElementById("valor")

    id_item.innerHTML   = ""
    erro_item.innerHTML = ""
    id_nome.innerHTML   = ""
    id_valor.innerHTML  = ""
}

setInterval(() => {
   limpar()
}, 1000000);
