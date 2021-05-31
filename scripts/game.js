let board = ['','','','','','','','','',];
let playerTime = 0; //vez do jogador; player 1 = 0
let symbols = ['o', 'x'];

function handleMove(position){

    board[position] = symbols[playerTime];
    
    //troca de jogador
    if (playerTime == 0){
        playerTime = 1;
    }
    else{
        playerTime = 0;
    }
}