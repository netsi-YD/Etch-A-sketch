const container=document.getElementById('container');
for(let i=0;i<256;i++){
const grid=document.createElement('div');
grid.classList.add('squares');
container.appendChild(grid);
}
const squares = document.querySelectorAll('.squares');

squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'black'; 
  });
});
