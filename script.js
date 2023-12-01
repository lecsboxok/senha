var entradaSenha = document.getElementById('entradaSenha');
var medidorPoder = document.getElementById('medidorPoder');
var requisitoComprimento = document.getElementById('requisitoComprimento');
var requisitoMinusculo = document.getElementById('requisitoMinuscula');
var requisitoMaiusculo = document.getElementById('requisitoMaiuscula');
var requisitoNumero = document.getElementById('requisitoNumero');
var requisitoSimbolo = document.getElementById('requisitoSimbolo');
var textoPoder = document.getElementById('textoPoder');
var mostrarSenha = document.getElementById('mostrarSenha');

//EXECUTAR A FUNÇÃO AO DIGITAR SENHA
entradaSenha.addEventListener('input', function () {
    var senha = entradaSenha.value;
    var Poder = verificaPoder(senha);
    //CORES BASEADA NA FORÇA DA SENHA (VERMELHO, AMARELO, VERDE)
    var cor = Poder < 50 ? 'red' : Poder < 80 ? 'yellow' : 'green';
    //TRANÇIÇÕES CSS
    medidorPoder.style.width = Poder + '%';
    medidorPoder.style.backgroundColor = cor;
    //ATUALIZA O TEXTO
    textoPoder.textContent = 'Força da Senha: ' + Poder + '%';
    //ATUALIZA OS INDICADORES DE REQUISITOS
    atualizar(senha);
});

mostrarSenha.addEventListener('click', function () {
    entradaSenha.type = entradaSenha.type === 'password' ? 'text' : 'password';
});

//FUNÇÃO PARA CALCULAR A FORÇA DA SENHA
function verificaPoder(senha) {
    var comprimentoMinimo = 8;
    var possuiMinuscula = /[a-z]/.test(senha);
    var PossuiMaiuscula = /[A-Z]/.test(senha);
    var possuiNumeros = /\d/.test(senha);
    var possuiSimbolos = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(senha);

    //PONTOS COM BASE NAS REGRAS 
    var Poder = 0;

    if(senha.length >= comprimentoMinimo) {
        Poder += 25;
        requisitoComprimento.classList.remove('vermelho');
        requisitoComprimento.classList.add('verde');
    } else {
        requisitoComprimento.classList.remove('verde');
        requisitoComprimento.classList.add('vermelho');
    }

    if(possuiMinuscula) {
        Poder += 25;
        requisitoMinusculo.classList.remove('vermelho');
        requisitoMinusculo.classList.add('verde');
    } else {
        requisitoMinusculo.classList.remove('verde');
        requisitoMinusculo.classList.add('vermelho');
    }

    if(PossuiMaiuscula) {
        Poder += 25;
        requisitoMaiusculo.classList.remove('vermelho');
        requisitoMaiusculo.classList.add('verde');
    } else {
        requisitoMaiusculo.classList.remove('verde');
        requisitoMaiusculo.classList.add('vermelho');
    }

    if(possuiNumeros) {
        Poder += 25;
        requisitoNumero.classList.remove('vermelho');
        requisitoNumero.classList.add('verde');
    } else {
        requisitoNumero.classList.remove('verde');
        requisitoNumero.classList.add('vermelho');
    }

    if(possuiSimbolos) {
        Poder += 25;
        requisitoSimbolo.classList.remove('vermelho');
        requisitoSimbolo.classList.add('verde');
    } else {
        requisitoSimbolo.classList.remove('verde');
        requisitoSimbolo.classList.add('vermelho');
    }

    return Math.min(100, Poder)
    
}

//FUÇÃO PARA ATUALIZAR INDICADORES DE REQUISITO
function atualizar(senha) {
    verificaPoder(senha);
}