const container = document.getElementById('container');

// Create initial grid
createGrid(16);

function createGrid(size) {
  // Clear existing squares
  container.innerHTML = '';

  const squareSize = 640 / size; // 640px is container width/height

  for (let i = 0; i < size * size; i++) {
    const grid = document.createElement('div');
    grid.classList.add('squares');
    grid.style.width = `${squareSize}px`;
    grid.style.height = `${squareSize}px`;

    // Hover effect
    grid.addEventListener('mouseover', () => {
      grid.style.backgroundColor = 'black';
    });

    container.appendChild(grid);
  }
}

// Handle button click
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
