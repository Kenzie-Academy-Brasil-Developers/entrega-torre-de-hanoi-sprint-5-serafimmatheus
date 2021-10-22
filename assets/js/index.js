// CAPTURAR CLASSES, IDS DO HTML
const contagem = document.querySelector(".count")
const jogo = document.querySelector(".game")
const botao = document.querySelector(".resetar button")
const nivelGame = document.querySelector('.dificuldade')
const pilares = document.querySelector(".main-game")

const div1 = document.createElement("div")
const div2 = document.createElement("div")
const div3 = document.createElement("div")

div1.classList.add("main-game__box-torre")
div2.classList.add("main-game__box-torre")
div3.classList.add("main-game__box-torre")

div1.setAttribute("id", "pilar-01")
div2.setAttribute("id", "pilar-02")
div3.setAttribute("id", "pilar-03")

pilares.appendChild(div1)
pilares.appendChild(div2)
pilares.appendChild(div3)

const pilar1 = document.querySelector("#pilar-01")
const pilar2 = document.querySelector("#pilar-02")
const pilar3 = document.querySelector("#pilar-03")

let selectNivel = 0

nivelGame.addEventListener('click', selectNivelGame)


function selectNivelGame(evt){
    let btnSelect = evt.target.id
    if (btnSelect === 'dificil'){
        selectNivel = 5
    }if (btnSelect === 'medio'){
        selectNivel = 4
    }if (btnSelect === 'facil'){
        selectNivel = 3
    }  
    nivelGame.style.display = 'none'
    jogo.innerText = 'Jogo em andamento...'
    jogo.style.backgroundColor = 'yellow'
    blocos()
    return selectNivel
}

// INTERAÇÃO COM OS BOTÕES
pilar1.addEventListener("click", mover)
pilar2.addEventListener("click", mover)
pilar3.addEventListener("click", mover)
botao.addEventListener("click", reset)

// FUNÇÃO PARA CRIAR OS BLOCOS, E COLOCAR DENTRO DOS PILARES
function blocos(){
    
    for(let i=0 ; i < selectNivel; i++)
    {
        const div = document.createElement("div")
        div.setAttribute("id", "torre-0"+(i+1))
        div.classList.add("main-game__box-torre__torre")
        pilar1.appendChild(div)
    }
}

let bloco = false
let pilarSelecionado
let contadorMovimentos = 0

// FUNÇÃO PARA REALIZAR O MOVIMENTO DOS BLOCOS
function mover(evt){
    let topo = evt.currentTarget
    
    // CAPTURAR O ÚLTIMO BLOCO, OU SEJA, O BLOCO QUE ESTÁ NO TOPO
    if(bloco === false)
    {
        pilarSelecionado = topo.lastElementChild
        pilarSelecionado.style.marginBottom = '2vh'
        bloco = true
    }  
        // SENÃO, A VARIÁVEL IRÁ RETORNAR PARA SEU ESTADO PADRÃO (FALSE)
        else
        {
            pilarSelecionado.style.marginBottom = '0px'
            bloco = false
        }

    if(!topo.lastElementChild)
    {
        topo.appendChild(pilarSelecionado)
        contadorMovimentos++
        bloco = false
    }
        // SE A LARGURA DO BLOCO DO TOPO FOR MAIOR QUE O PILAR QUE ESTÁ SELECIONADO, ENTÃO SERÁ INSERIDO NO PILAR
        else if(topo.lastElementChild.clientWidth > pilarSelecionado.clientWidth)
        {
            topo.appendChild(pilarSelecionado)
            contadorMovimentos++
            bloco = false
        }

    // INSERIR NA TELA, O CONTADOR
    contagem.innerHTML = `Contador de Movimentos: ${contadorMovimentos}`
    // QUANDO O PILAR 3 HOUVER TODAS AS PEÇAS, O JOGO FINALIZA
    if(pilar3.childElementCount >= selectNivel)
    {
        jogo.innerHTML = `Fim de Jogo`
        jogo.style.backgroundColor = 'green'
        botao.style.backgroundColor = 'green'
        botao.style.cursor = 'pointer'
        botao.style.border = 'none'
        setTimeout(function(){
            pilar1.innerHTML = ``
            pilar2.innerHTML = ``
            pilar3.innerHTML = ``
        },3000)
    }
}

// FUNÇÃO RESET, PARA REINICIAR O JOGO DESDE O INÍCIO
function reset(){
    contadorMovimentos = 0
    contagem.innerHTML = `Contador de Movimentos: 0`
    jogo.innerHTML = `Aguardando o usuário..`
    jogo.style.backgroundColor = 'white'
    pilar1.innerHTML = ``
    pilar2.innerHTML = ``
    pilar3.innerHTML = ``
    nivelGame.style.display = 'flex'
    botao.style.backgroundColor = 'orange'
    botao.style.cursor = 'pointer'
    botao.style.border = 'none'
    // botao.style.color = 'white'
    // botao.style.fontSize = '25px'
}


mover()


