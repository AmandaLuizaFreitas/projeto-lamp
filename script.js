//    VARIÁVEL
const lampitaOn = document.getElementById('lpOn')
const lampitaOff = document.getElementById('lpOff')
const lampita = document.getElementById('lamp')

// FUNÇÃO
function lquebrado(){
    return lamp.src.indexOf ('quebrada') > -1
    
}

function luz(){
    if (!lquebrado()){
    lamp.src = './img/ligada.jpg';
}
}
function apagar(){
    if (!lquebrado()){
        lamp.src = './img/desligada.jpg' 
    }
    
}
function quebrado(){
    lamp.src = './img/quebrada.jpg'
    
}
// EVENTO

lampitaOn.addEventListener('click',luz)
lampitaOff.addEventListener('click',apagar)
lamp.addEventListener('mouseover',luz)
lamp.addEventListener('mouseleave',apagar)
lamp.addEventListener('dblclick',quebrado)