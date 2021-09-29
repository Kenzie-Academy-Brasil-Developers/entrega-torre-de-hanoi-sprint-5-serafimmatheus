// CAPTURAR CLASSES, IDS DO HTML
const pilar1 = document.querySelector("#pilar-01")
const pilar2 = document.querySelector("#pilar-02")
const pilar3 = document.querySelector("#pilar-03")
const contagem = document.querySelector(".count")
const jogo = document.querySelector(".game")
const botao = document.querySelector(".resetar button")
const nivelGame = document.querySelector('.dificuldade')


nivelGame.addEventListener('click', selectNivelGame)


function selectNivelGame(evt){
    let btnSelect = evt.target.id
    let selectNivel = 0
    if (btnSelect === 'dificil'){
        selectNivel = 5
    }if (btnSelect === 'medio'){
        selectNivel = 4
    }if (btnSelect === 'facil'){
        selectNivel = 3
    }  
    nivelGame.style.display = 'none'
    return blocos(selectNivel)
}

// INTERAÇÃO COM OS BOTÕES
pilar1.addEventListener("click", mover)
pilar2.addEventListener("click", mover)
pilar3.addEventListener("click", mover)
botao.addEventListener("click", reset)

// FUNÇÃO PARA CRIAR OS BLOCOS, E COLOCAR DENTRO DOS PILARES
blocos()
function blocos(nivel){

    for(let i=0 ; i < nivel ; i++)
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
        pilarSelecionado.style.marginBottom = '50px'
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
    if(pilar3.childElementCount >= 3)
    {
        jogo.innerHTML = `Fim de Jogo`
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
    jogo.innerHTML = `O jogo está em andamento`

    pilar1.innerHTML = ``
    pilar2.innerHTML = ``
    pilar3.innerHTML = ``
    nivelGame.style.display = 'flex'
    botao.style.backgroundColor = 'orange'
    botao.style.cursor = 'pointer'
    botao.style.border = 'none'
    // botao.style.color = 'white'
    // botao.style.fontSize = '25px'
    blocos()
}


mover()


