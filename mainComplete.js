import { Unit } from './entities/unit.js';
import { createPlayerComponent } from './components/newPlayer.js';
import { createMonsterComponent } from './components/newMonster.js';

// Players logic
const allPlayers = []
const createNewPlayer = document.querySelector('.createNewPlayer')
createNewPlayer.addEventListener('click', () => {
    // Getting the name
    const playerName = prompt('Enter player name:');

    // Logic creation new Player
    if (playerName) {
        // Creation player
        const newPlayer = new Unit(playerName);
        newPlayer.type = "Player"
        allPlayers.push(newPlayer)
        
        // Creation of it in the DOM
        createPlayerComponent(newPlayer);
        
        // Logging it
        console.log(`Player ${allPlayers.indexOf(newPlayer) + 1} : ${newPlayer.name}`)
    } else {
        console.log("Something failed");
    }
});

// Monsters logic
const allMonsters = []
const createNewMonster = document.querySelector('.createNewMonster')
createNewMonster.addEventListener('click', () => {
    // Getting the name
    const monsterName = prompt('Enter monster name:');

    // Logic creation new Monster
    if (monsterName) {
        // Creation monster
        const newMonster = new Unit(monsterName);
        newMonster.type = "Monster"
        allMonsters.push(newMonster)

        // Creation of it in the DOM
        createMonsterComponent(newMonster);

        // Logging it
        console.log(`Monster ${allMonsters.indexOf(newMonster) + 1} : ${newMonster.name}`)
    } else {
        console.log("Something failed");
    }
});


