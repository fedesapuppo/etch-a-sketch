const container = document.querySelector('#container');

function makeGrid(size){
for (i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    container.appendChild(div).className = "box";
  }
}

makeGrid(16)

const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
      box.style.backgroundColor = 'black';
    });
});