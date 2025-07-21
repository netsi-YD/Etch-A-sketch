const container = document.getElementById('container');

function createGrid(size) {
  container.innerHTML = '';

  container.style.display = 'grid';
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const grid = document.createElement('div');
    grid.classList.add('squares');
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = 'black';
    });
    container.appendChild(grid);
  }
}

createGrid(16); // Load default grid

const button = document.querySelector("#btn");
button.addEventListener("click", function () {
  let userSize = prompt("Enter number of squares per side (max 100):");
  userSize = parseInt(userSize);

  if (userSize > 0 && userSize <= 100) {
    createGrid(userSize);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});
