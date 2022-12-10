const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const lamp = document.getElementById('lampada');

function isBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!isBroken()) {
        lampada.src = './images/ligada.jpg'
    }
}

function lampOff() {
    if (!isBroken()) {
        lampada.src = './images/desligada.jpg'
    }
}

function lampBroken() {
    lampada.src = './images/quebrada.jpg'
}

ligar.addEventListener('click', lampOn);
desligar.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);