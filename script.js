let order = [];
let clickedOrder = [];
let score = 0;


const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');


// cria ordem aleatória das cores

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createElementColor(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 350);
    setTimeout(() => {
        element.classList.remove('selected');
    },number);
}

//checa se os botões apertados pelo usuário corresponde pela ordem fornecida

let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]){
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuacão: ${score}\n`);
        nextLevel();
    }
}

//função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createElementColor(color).classList.add('selected');

    setTimeout(() => {
        createElementColor(color).classList.remove('selected');        
        checkOrder();
    }, 10);

}

//funcão que retorna a cor

let createElementColor = (color) => {
    if(color == 0) {
        return green;
    }
    else if (color == 1) {
        return red;
    }
    else if (color == 2) {
        return yellow;
    }
    else if (color == 3) {
        return blue;
    }
}

//função para próximo nivel do jogo

let nextLevel = () => {
    score++;
    shuffleOrder();
}

//função para game over

let lose = () => {
    alert(`Pontuação: ${score}\nVocê perdeu!\nClique em ok para iniciar um novo jogo`);
    order = []
    clickedOrder = [];
    playGame();
}

//função de inicio do jogo

let playGame = () => {
    alert(`Bem vindo ao Genius! iniciando novo jogo`)
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


playGame();