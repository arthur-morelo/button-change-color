const button = document.getElementById('botao');

const azul = window.getComputedStyle(document.body).backgroundColor;
let roxo = false;

botao.addEventListener('click' , function() {
    if (!roxo) {
        document.body.style.backgroundColor = 'purple';
        roxo = true;
        
    }else {
        document.body.style.backgroundColor = 'blue';
        roxo = false;   
    }
    
});



