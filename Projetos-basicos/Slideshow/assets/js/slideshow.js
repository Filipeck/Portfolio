'use strict';

const images = [
    {'id': '1', 'url': './assets/images/bsinfinite.jpg'},
    {'id': '2', 'url': './assets/images/ffx-x2.jpg'},
    {'id': '3', 'url': './assets/images/hl2.jpg'},
    {'id': '4', 'url': './assets/images/mgs3.jpg'},
    {'id': '5', 'url': './assets/images/ps4golden.jpg'},
    {'id': '6', 'url': './assets/images/sh2.jpg'},
    {'id': '7', 'url': './assets/images/tlou.jpg'},
    {'id': '8', 'url': './assets/images/re3.png'},
    {'id': '9', 'url': './assets/images/re4.png'},
]

const container = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages(images, container);