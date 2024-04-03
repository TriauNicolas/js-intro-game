export const createMonster = (newMonster) => {
    const game = document.querySelector('.allEnemies');

    // Create player container
    const newDiv = document.createElement('div');
    newDiv.classList.add('entitiesInfosContainer', 'monster');

    // Create a title element
    const newTitle = document.createElement('h2');
    newTitle.textContent = `I'm ${newMonster.name}`;
    newTitle.classList.add('entitiesName')
    newDiv.appendChild(newTitle);
    
    // Create a title element
    const newHealth = document.createElement('h3');
    newHealth.textContent = `Health : ${newMonster.health}`;
    newHealth.classList.add(`health-${newMonster.id}`)
    newHealth.classList.add('entitiesName')
    newDiv.appendChild(newHealth);

    // Attribute the gif
    const newImage = document.createElement('img');
    newImage.src = "./images/monster.gif";
    newImage.classList.add('monsterGif');
    newDiv.appendChild(newImage);

    // Attack Button
    const attackButton = document.createElement('button')
    attackButton.classList.add('button', 'entityChoiceButton')
    attackButton.innerHTML = "Attack"
    attackButton.addEventListener('click', () => {
        newMonster.attackRandomTarget()
    })
    newDiv.appendChild(attackButton)

    // Append the div to the container
    game.appendChild(newDiv);
  }