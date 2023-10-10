const item = document.getElementById('ref');
const itemInfoContainer = document.getElementById('item-info');

import "database.sql"

item.addEventListener('click', function() {
  const item_Id = this.getAttribute('data-id');

  const item_Info = buscarInformacoesNoBanco(item_Id);

  const novoHTML = `
    <DOCTYPE html>
    <html lang="PT_BR"
    <head>
    <link rel="stylesheet" href="style.css">
    <title>${nome_site}</title>
    </head>
    <body>
    <header>
    <img scr="${item_Info.ref}.png" alt="foto do produto">
    <nav>
    <a href="/todos">Todos os modelos</a> 
    <a href="/promocao">Promoção</a> 
    </nav>
    </header>
    <h2>${item_Info.nome}</h2>
    <p>${item_Info.descricao}</p>
    <img src="${item_Info.imagem}" alt="${item_Info.nome}">
    </body>
    </html>
  `;
  
  itemInfoContainer.innerHTML = novoHTML;
});

function buscarInformacoesNoBanco(itemId) {

  return {
    nome: "Item " + itemId,
    descricao: "Descrição do item " + item_Id,
    imagem: "caminho/para/imagem" + item_Id + ".jpg"
  };
}

