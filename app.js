let amigos = []

function adicionarAmigo(){
    let input_amigo = document.querySelector('#amigo')
    let entrada_amigo = input_amigo.value
    if (entrada_amigo.length == 0) {
        alert('Por favor insira um nome')
    }else{
        amigos.push(entrada_amigo)
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

function sortearAmigo(){
    if (amigos.length >= 2) {
        let numeroAleatorio = Math.floor(Math.random() * (amigos.length - 0) + 0)
        let sorteado = amigos[numeroAleatorio]
        let listaAmigos = document.querySelector('#listaAmigos')
        listaAmigos.innerHTML = `O amigo secreto sorteado é: ${sorteado}.`
        listaAmigos.classList.add('sorteado')
    }else{
        alert("Por favor insira mais de 1 nome para continuar")
    }
}