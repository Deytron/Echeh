//Définition tableau
var squares = [];
var pions = [];

//Définition valeurs jeu
var cnv;
var tour;
var blanc = 255;
var noir = 0;
let font,
  fontsize = 36;
var deplacements = 20;
var totalSeconds = 0;
var minu = 0;
var sec = 0;
var textsec;

//Chargement des assets avant que les fonctions draw() soient appelées
function preload() {
  font = loadFont("assets/opensans.ttf");
  RoiWhite = loadImage("assets/king.png");
  RoiBlack = loadImage("assets/king_b.png");
  DameWhite = loadImage("assets/king.png");
  DameBlack = loadImage("assets/king_b.png");
  FouWhite = loadImage("assets/king.png");
  FouBlack = loadImage("assets/king_b.png");
  CavalierWhite = loadImage("assets/king.png");
  CavalierBlack = loadImage("assets/king_b.png");
  TourWhite = loadImage("assets/king.png");
  TourBlack = loadImage("assets/king_b.png");
  PionWhite = loadImage("assets/king.png");
  PionBlack = loadImage("assets/king_b.png");
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(700, 800);
  centerCanvas();
  //Creation squares
  for (y = 0; y < height; y += 50) {
    for (x = 0; x < width; x += 50) {
      square = new Square(x, y);
      squares.push(square);
      // console.log(square);
    }
  }
  //Texte
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  //Sélection tour aléatoire au setup
  tour = Math.round(random());
  console.log(tour);
  //Timer
  setInterval(stopwatch, 1000);

  //Push pions
  pions.push(new Roi(squares[4], 1));
  pions.push(new Dame(squares[5], 1));
}

function newTour() {
  toi = 0;
}

function windowResized() {
  centerCanvas();
}

//Draw de tout
function draw() {
  background(200);
  drawBoard();
  //Draw texte
  drawWords();
  //Draw pions
  for (i = 0; i < pions.length; i++) {
    pions[i].display();
    // console.log(pions);
  }
}

function drawBoard() {
  let rows = 0;
  let firstColor = "black";
  let secondColor = "white";

  while (rows < 16) {
    if (rows % 2 == 0) {
      firstColor = "white";
      secondColor = "black";
    } else {
      firstColor = "black";
      secondColor = "white";
    }
    let cols = 0;
    while (cols < 10) {
      if (cols % 2 == 0) {
        fill(firstColor);
      } else {
        fill(secondColor);
      }
      rect(cols * 50, rows * 50, 50, 50);
      cols += 1;
    }
    rows += 1;
  }
}

function stopwatch() {
  textsec.clear();
  textminu.clear();
  totalSeconds++;
  sec = totalSeconds % 60;
  if (sec >= 59) {
    minu++;
  }
  // console.log(totalSeconds);
  // console.log(sec);
  // console.log(minu);
}

function drawWords() {
  textAlign(RIGHT);

  if (tour == 0) {
    fill(blanc);
    text("Tour des", 660, 50);
    text("blancs", 660, 150);
  } else {
    fill(noir);
    text("Tour des", 660, 50);
    text("noirs", 660, 150);
  }
  fill(blanc);
  textminu = text(minu, 575, 702);
  text(":", 600, 700);
  textsec = text(sec, 650, 702);
}
