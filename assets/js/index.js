const mainGame = document.querySelector('.main-game')

function escuta(evt){
    button = evt.target.id
    console.log(button)

    if (button === 'torre-01'){
        alert(`${button} selecionado`)
    }

    if (button === 'torre-02'){
        alert(`${button} selecionado`)
    }

    if (button === 'torre-03'){
        alert(`${button} selecionado`)
    }

    if (button === 'torre-04'){
        alert(`${button} selecionado`)
    }

    if (button === 'torre-05'){
        alert(`${button} selecionado`)
    }
}


mainGame.addEventListener('click', escuta)