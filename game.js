var alt = 0
var lar = 0
var vidas = 1
var tempo = 10

var makeBugTime = 1500

var lvl = window.location.href
lvl = lvl.replace('?', '')

if (lvl === 'normal') {
    // 1500
    makeBugTime = 1500
} else if (lvl === 'dificil') {
    // 1000
    makeBugTime = 1000
} else if (lvl === 'chucknorris') {
    // 750
    makeBugTime = 750;
}



function ajustSize () {
    alt = window.innerHeight
    lar = window.innerWidth

}

ajustSize()

var cronometro = setInterval(function() {
    tempo -= 1

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(makeBug)
        window.location.href = 'win.html'
    }

    document.getElementById('cronometro').innerHTML = tempo
}, 1000)

function randomPos () {
    
    // remover o mosquito anterior
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        if (vidas > 3) {
            window.location.href = 'game_over.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            
            vidas++
        }
    }
    
    var posicaoX = Math.floor(Math.random() * lar) - 90
    var posicaoY = Math.floor(Math.random() * alt) - 90

    console.log(posicaoX, posicaoY)

    posicaoX = posicaoX < 0 ? 0 : posicaoX


    // criar lemento html
    var mosquito = document.createElement('img')
    mosquito.src = "imagens/mosca.png"
    mosquito.className = randomSize() + ' ' + randomSide()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }


    document.body.appendChild(mosquito)

}

function randomSize () {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1' 
        case 1:
            return 'mosquito2'
        case 2: 
            return 'mosquito2'
    }
}

function randomSide() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0: 
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}