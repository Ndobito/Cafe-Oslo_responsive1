//Contenido

const iconoMenu = document.querySelector('#IconMenu'), 
menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
});
