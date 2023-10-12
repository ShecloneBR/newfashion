(function(){

 const cep = document.querySeletor("input[name=cep]")
cep.addEventListener('blur', e => {
  const value = cep.value.replace(/[^0-9]+/, '')
  const url = `https://viacep.com.br/ws/${value}/json/`   
  
  fetch(url)
  .then( response => response.json())
  .then( json =>{

    if (json.loagdouro){
            document.querySeletor('input[name=rua]').value = json.loagdouro
            document.querySeletor('input[name=Bairro]').value = json.bairro
            document.querySeletor('input[name=Cidade]').value = json.localidade
            document.querySeletor('input[name=Estado]').value = json.uf
    }
  })
})  

}());