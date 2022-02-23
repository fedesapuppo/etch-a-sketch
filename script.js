const container = document.querySelector('#container');

function makeGrid(size){
for (i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    container.appendChild(div).className = "box";
  }
}

makeGrid(16)


function paint(){
let boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
      box.style.backgroundColor = 'black';
    });
});
}

paint()


const button = document.getElementById('button');

button.addEventListener('click', () => {
  let boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => {
    box.style.backgroundColor = 'white';
    });
    let size = prompt("Please enter the desired number of squares per side for the new grid");
    while (size > 100 || size < 4){
    size = prompt("Please enter a number between 4 and 100");
    }
    while (container.firstChild) {
    container.firstChild.remove()
    }
    makeGrid(size);
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    paint()
});