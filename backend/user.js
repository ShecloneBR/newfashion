const user = {
    imagem: "foto.png",
    nome: "Seu nome",
    apelido: "seu apelido",
    seu_email: "exemplo@disroot.net"
}

function perfil() {
    const perfil_a = document.getElementById('perfil_a')
    const perfil_n = document.getElementById('perfil_n')
    const perfil_i = document.getElementById('perfil_i')

    perfil_n.innerHTML = user.nome
    perfil_a.innerHTML = user.apelido
    perfil_i.src = user.imagem

    if (perfil_i.src === "foto.png") {
        perfil_i.src = "foto_padrão.png"
    }
}