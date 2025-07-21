const container=document.getElementById('container');
for(let i=0;i<256;i++){
const grid=document.createElement('div');
grid.classList.add('squares');
container.appendChild(grid);
}