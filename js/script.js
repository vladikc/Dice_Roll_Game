//select elements and create variabeles
const die = document.querySelector('.die')
const roll = document.querySelector('.roll')
const img =die.querySelector('img')

const players = [
{player:document.querySelector('.player1'),location:0},
{player:document.querySelector('.player2'),location:0},
{player:document.querySelector('.player3'),location:0},
{player:document.querySelector('.player4'),location:0},


]

const numPlayers = 4 
let turn = 0



// define functions
// I need to make a moverPlayer function
// I need to make a changeTurn function'
// I need to make a roll Die 

function  changeTurn(){
    turn = (turn>=numPlayers-1) ? 0 : turn +1
}


function movePlayer(turn,num,spots){

    const player = players[turn]
    player.location +=num
    player.location =  (player.location > 21 )  ? player.location -21 :player.location
    spots[player.location].appendChild(player.player)
    }


function rollDie(){
    img.src = `img/Dodecahedron3.gif`
    setTimeout(() => {
        const num= Math.ceil(Math.random()*6)
        roll.textContent = num 
        movePlayer(turn,num, getSpots())
        changeTurn()
    },1700)
}



die.addEventListener('click',(e) => {
    rollDie()
})




