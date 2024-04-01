import { Player } from './entities/player.js';
import { createPlayerComponent } from './components/newPlayer.js';

const createNewPlayer = document.querySelector('.createNewPlayer')
createNewPlayer.addEventListener('click', () => {
    createPlayerComponent();
});

// const allPlayers = []

// const createNewPlayer = document.querySelector('.createNewPlayer')
// createNewPlayer.addEventListener('click', () => {
//     const playerName = prompt('Enter player name:');
//     if (playerName) {
//         const newPlayer = new Player(playerName);
//         allPlayers.push(newPlayer)
//         createPlayerComponent(newPlayer);
//     }

//     console.log(`All Players : ${allPlayers}`)
// });