const ligarDesligar = document.getElementById('ligarDesligar');
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

function lampOnOff(){
    if(ligarDesligar.textContent == 'Ligar'){
        lampOn();
        ligarDesligar.textContent = 'Desligar';
    }else{
        lampOff();
        ligarDesligar.textContent = 'Ligar';
    }
}

ligarDesligar.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);