export const createPlayerComponent = (newPlayer) => {
  const game = document.querySelector('.gameContainer');

  // Create player container
  const newDiv = document.createElement('div');
  newDiv.classList.add('component');

  // Create a title element
  const newTitle = document.createElement('h2');
  newTitle.textContent = `I'm ${newPlayer.name}`;
  newDiv.appendChild(newTitle);

  // Append the div to the container
  game.appendChild(newDiv);
}