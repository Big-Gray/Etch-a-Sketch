const d = document;
const container = d.querySelector("#container");

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//generates an array of divs
function createGrid(numTiles) {
  const arr = []
  for (let i = 0; i < numTiles ** 2; i++) {
    const square = d.createElement("div");
    square.classList.add("square");
    arr.push(square);
  }
  return arr;
}

function screenSetup() {
  let numTiles = parseInt(prompt("What size do you want your square to be?"), 10);

  var n = 0, msg = "What size do you want your square to be?";
  do {
    n++;
    if (n > 1) {
      msg = "Invalid size! \nWhat size do you want your square to be? (Must be between 1 and 100)";
      numTiles = prompt(msg);
    }
  }
  while (numTiles < 1 || numTiles > 100)

  console.log(numTiles);
  container.replaceChildren(...createGrid(numTiles));
  const squares = d.querySelectorAll(".square");
  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = "black";
    });
  });
  container.style.gridTemplateColumns = `repeat(${numTiles}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${numTiles}, 1fr)`;
}


const resizeButton = d.querySelector("button");
resizeButton.addEventListener('click', () => screenSetup());

// const body = d.querySelector("body");
// body.appendChild(container);