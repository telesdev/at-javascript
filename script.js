// array de controle de cartas viradas
let cartasViradas = []

// array de controle para pares de carta
let pares = 0

// array de controle para marcar o início do jogo
let inicio;

// array de controle para marcar o final do jogo
let fim;

// arrawy de controle para marcar o tempo total de jogo
let tempo;

const imagensArr = [
    'img/facebook.png',
    'img/android.png',
    'img/chrome.png',
    'img/firefox.png',
    'img/html5.png',
    'img/googleplus.png',
    'img/twitter.png',
    'img/windows.png'
]

const cross = 'img/cross.png'

// array de imagens para receber um objeto com imagem e id
let imagens = []

// array para receber as imagens duas vezes e depois popular o array 'imagens'
const imgsDoubled = [...imagensArr, ...imagensArr]

for (let i = 0; i < 16; i++) {
    let img = {
        src: imgsDoubled[i],
        id: i%8
    }
    imagens.push(img)
}

const createDivs = () => {
    let i = 0
    while (i < 16) {

        let newCarta = document.createElement('div')
        newCarta.id = 'carta'+i
        newCarta.className = 'carta'

        let newDivFrente = document.createElement('div')
        newDivFrente.className = 'face frente'
        newDivFrente.style.backgroundImage = `url(${imagens[i].src})`

        let newDivVerso = document.createElement('div')
        newDivVerso.className = 'face verso'
        newDivVerso.style.backgroundImage = `url(${cross})`

        newCarta.appendChild(newDivFrente)
        newCarta.appendChild(newDivVerso)
        jogo.appendChild(newCarta)

        i++
    }
}

const randomizarDivs = () => {
    imagens = embaralhar(imagens)
    let frente = document.getElementsByClassName('frente')
    let carta = document.getElementsByClassName('carta')

    for (let i = 0; i < 16; i++) {
        frente[i].style.backgroundImage = `url(${imagens[i].src})`
        carta[i].classList.value = 'carta id'+imagens[i].id
    }
}

const esconder = () => {
    setTimeout(() => {
        $('.frente').slideUp()
        $('.verso').slideDown()
    }, 3000)
}

const reiniciar = (cartasViradas) => {
    inicio = new Date()
    cartasViradas = []
    this.pares = 0
    $('.frente').slideDown()
    $('.verso').slideUp()
    randomizarDivs()
    esconder()
    setTimeout(() => {
        addClick(cartasViradas)
    }, 3000)
    
}

const embaralhar = (array) => {
    let newArray = [];
    while(newArray.length !== array.length){
        let i = Math.floor(Math.random()*array.length);
        if(newArray.indexOf(array[i]) < 0){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const addClick = (cartasViradas) => {
    const cartas = document.getElementsByClassName('carta')
    pares = 0
    let controle = true
    for (let j = 0; j < cartas.length; j++) {
        cartas[j].addEventListener('click', () => {
            if (controle) {
                $(`.carta:eq(${j}) .verso`).fadeOut('slow', () => {
                    $(`.carta:eq(${j}) .frente`).fadeIn('slow')
                })
                if (cartasViradas.length < 2) {
                    if (cartas[j].classList[2]) {
                        return
                    }
                    cartas[j].classList.add('virada')
                    cartasViradas.push(cartas[j])
                    if (cartasViradas.length === 2) {
                        if (cartasViradas[0].classList[1] === cartasViradas[1].classList[1]){
                            cartasViradas[0].classList.add('par')
                            cartasViradas[1].classList.add('par')
                            cartasViradas = []
                            pares++
                            if (pares == 8) {
                                gameOver()
                            }
                        } else {
                            controle = false;
                            setTimeout(() => {
                                $(cartasViradas[0].children[0]).slideUp()
                                $(cartasViradas[0].children[1]).slideDown()
                                $(cartasViradas[1].children[0]).slideUp()
                                $(cartasViradas[1].children[1]).slideDown()
                                cartasViradas[0].classList.remove('virada')
                                cartasViradas[1].classList.remove('virada')
                                cartasViradas = []
                                controle = true;
                            }, 1500);
                        }
                    }
    
                }
            }
        })
    }
}

const gameOver = () => {
    fim = new Date()
    tempo = fim.getTime() - inicio.getTime()
    alert('O jogo durou ' + tempo/1000 + ' segundos.')
}

$(document).ready(() => {
    (function() {
        const tabuleiro = document.getElementById('tabuleiro')
        tabuleiro.innerHTML = `
        <h1>Jogo da Memória</h1>
        <button onclick=reiniciar()>Criar novo jogo</button>
        <div id='jogo'></div>
        `
    })();

    createDivs();
})