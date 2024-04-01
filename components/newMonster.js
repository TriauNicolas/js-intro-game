export const createMonsterComponent = (newMonster) => {
    const game = document.querySelector('.allEnemies');
  
    // Create player container
    const newDiv = document.createElement('div');
    newDiv.classList.add('entitiesInfosContainer');
  
    // Create a title element
    const newTitle = document.createElement('h2');
    newTitle.textContent = `I'm ${newMonster.name}`;
    newTitle.classList.add('entitiesName')
    newDiv.appendChild(newTitle);
  
    // Attribute the gif
    const newImage = document.createElement('img');
    newImage.src = "./images/monster.gif";
    newImage.classList.add('monsterGif');
    newDiv.appendChild(newImage);
  
    // Append the div to the container
    game.appendChild(newDiv);
  }