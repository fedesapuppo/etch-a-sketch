const container = document.querySelector('#container');

function makeGrid(size){
for (i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    container.appendChild(div).className = "box";
  }
}

makeGrid(16)

