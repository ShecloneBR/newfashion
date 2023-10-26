const item = {
    classe: "roupa",
    nome: "vestido vermelho grande",
    tamanho: "m",
}

var classe = item.classe
var nome = item.nome 
var tamanho = item.tamanho

console.log(classe/nome/tamanho)

 const addCarrinho = document.getElementById("addCarrinho")
addCarrinho.addEventListener('click', function(){
    addCarrinho.style.color = '#1e1e1e'
    addCarrinho.style.border = '2b7f37'
    addcarrinho.scr = 'addCanhirro.gif'
})

const comprar = document.getElementById("comprar")
comprar.addEventListener('click', function(){
    comprar.style.color = '#2b7f37'
    comprar.style.border = '#ffffff'
    comprar.scr = 'comprar.gif'
})

tempo = newDate()
hora = tempo.getHours()

if (tempo > 6 && tempo < 18){
    comprar.innerHTML = 'Tenha um otimo Dia'
    addCarrinho.innerHTML = 'Otima escolha nesse belo dia'
    comprar.style.color = '#657f07'
    addCanhirro.style.color = '#657f07'
    
} else {
    comprar.innerHTML = 'Tenha uma otima noite'
    addCanhirro.innerHTML = 'Fica belo em voce ainda mais nessa noite'
    addCanhirro.style.color = '#81A309'
    comprar.style.color = '#657f07'
}



