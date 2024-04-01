export const createPlayerComponent = (newPlayer) => {
    const game = document.querySelector('.allPlayers');

    // Create player container
    const newDiv = document.createElement('div');
    newDiv.classList.add('entitiesInfosContainer', 'player');

    // Create a title element
    const newTitle = document.createElement('h2');
    newTitle.textContent = `I'm ${newPlayer.name}`;
    newTitle.classList.add('entitiesName')
    newDiv.appendChild(newTitle);

    // Attribute the gif
    const newImage = document.createElement('img');
    newImage.src = "./images/hero.gif";
    newImage.classList.add('heroGif');
    newDiv.appendChild(newImage);

    // Attack Button
    const attackButton = document.createElement('button')
    attackButton.classList.add('button', 'entityChoiceButton')
    attackButton.innerHTML = "Attack"
    attackButton.addEventListener('click', () => {
        newPlayer.attackRandomTarget()
    })
    newDiv.appendChild(attackButton)

    // Append the div to the container
    game.appendChild(newDiv);
}
