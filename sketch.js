var squares = [];
var pieces = [];

var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(500, 800);
  centerCanvas();
  background(200);
  drawBoard();
}

function windowResized() {
  centerCanvas();
}

function drawBoard() {
  let rows = 0
  let firstColor = 'black'
  let secondColor = 'white'

  while (rows < 16) {
    if (rows % 2 == 0) {
      firstColor = 'white'
      secondColor = 'black'
    } else {
      firstColor = 'black'
      secondColor = 'white'
    }
    let cols = 0
    while (cols < 10) {
      if (cols % 2 == 0) {
        fill(firstColor)
      } else {
        fill(secondColor)
      }
      rect(cols * 50, rows * 50, 50, 50)
      cols += 1
    }
    rows += 1
  }
}