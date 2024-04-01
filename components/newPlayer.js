export const createPlayerComponent = (newPlayer) => {
  const game = document.querySelector('.allPlayers');

  // Create player container
  const newDiv = document.createElement('div');
  newDiv.classList.add('entitiesInfosContainer');

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

  // Append the div to the container
  game.appendChild(newDiv);
}