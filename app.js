let amigos = []

function adicionarAmigo(){
    let input_amigo = document.querySelector('#amigo')
    let entrada_amigo = input_amigo.value
    if (entrada_amigo.length == 0) {
        alert('Por facor insira um nome')
    }else{
        amigos.push(entrada_amigo)
        console.log(amigos)
        listaAmigo(amigos)
    }
    input_amigo.value = ''
}

function listaAmigo(amigos){
    let listaAmigos = document.querySelector('#listaAmigos')
    listaAmigos.innerHTML = ''
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`
        
    }
}