import { Unit } from './entities/unit.js';
import { createPlayer } from './components/createPlayer.js';
import { createMonster } from './components/createMonster.js';

// Players logic
const createNewPlayer = document.querySelector('.createNewPlayer');
createNewPlayer.addEventListener('click', () => {
    // Getting the name
    const playerName = prompt('Enter player name:');

    // Logic creation new Player
    if (playerName) {
        // Creation player
        const newPlayer = new Unit(playerName, "Player");
        
        // Creation of it in the DOM
        createPlayer(newPlayer);
        
        // Logging it
        console.log(`New Player: ${newPlayer.name}`)
    } else {
        console.log("Something failed");
    }
});

// Monsters logic
const createNewMonster = document.querySelector('.createNewMonster')
createNewMonster.addEventListener('click', () => {
    // Getting the name
    const monsterName = prompt('Enter monster name:');

    // Logic creation new Monster
    if (monsterName) {
        // Creation monster
        const newMonster = new Unit(monsterName, "Monster");

        // Creation of it in the DOM
        createMonster(newMonster);

        // Logging it
        console.log(`New Monster : ${newMonster.name}`)
    } else {
        console.log("Something failed");
    }
});


