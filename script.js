const fades = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {

fades.forEach(section => {

const pos = section.getBoundingClientRect().top;
const screen = window.innerHeight / 1.3;

if(pos < screen){
section.classList.add('show');
}

});

});
