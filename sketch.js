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

//Chargement des assets avant que les fonctions draw() soient appelées
function preload() {
  font = loadFont("assets/opensans.ttf");
  RoiWhite = loadImage("assets/king.png");
  RoiBlack = loadImage("assets/king_b.png");
  DameWhite = loadImage("assets/queen.png");
  DameBlack = loadImage("assets/queen_b.png");
  FouWhite = loadImage("assets/bishop.png");
  FouBlack = loadImage("assets/bishop_b.png");
  CavalierWhite = loadImage("assets/knight.png");
  CavalierBlack = loadImage("assets/knight_b.png");
  TourWhite = loadImage("assets/rook.png");
  TourBlack = loadImage("assets/rook_b.png");
  PionWhite = loadImage("assets/pawn.png");
  PionBlack = loadImage("assets/pawn_b.png");
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(500, 800);
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

  //Push pions noirs haut
  pions.push(new Tour(squares[0], 1));
  pions.push(new Cavalier(squares[1], 1));
  pions.push(new Cavalier(squares[2], 1));
  pions.push(new Fou(squares[3], 1));
  pions.push(new Roi(squares[4], 1));
  pions.push(new Dame(squares[5], 1));
  pions.push(new Fou(squares[6], 1));
  pions.push(new Cavalier(squares[7], 1));
  pions.push(new Cavalier(squares[8], 1));
  pions.push(new Tour(squares[9], 1));
  for (i = 10; i < 20; i++) {
    pawn = new Pion(squares[i], 1);
    pions.push(pawn);
  }

  //Push pions blancs bas
  pions.push(new Tour(squares[150], 0));
  pions.push(new Cavalier(squares[151], 0));
  pions.push(new Cavalier(squares[152], 0));
  pions.push(new Fou(squares[153], 0));
  pions.push(new Roi(squares[154], 0));
  pions.push(new Dame(squares[155], 0));
  pions.push(new Fou(squares[156], 0));
  pions.push(new Cavalier(squares[157], 0));
  pions.push(new Cavalier(squares[158], 0));
  pions.push(new Tour(squares[159], 0));
  for (i = 140; i < 150; i++) {
    pawn = new Pion(squares[i], 0);
    pions.push(pawn);
  }
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
  totalSeconds++;
  sec = totalSeconds % 60;
  if (sec >= 59) {
    minu++;
  }
  document.getElementById("minutes").innerHTML = minu;
  document.getElementById("secondes").innerHTML = sec;
  // console.log(totalSeconds);
  // console.log(sec);
  // console.log(minu);
}

function drawWords() {
  if (tour == 0) {
    textetour = "blancs";
  } else {
    textetour = "noirs";
  }
  document.getElementById("couleur").innerHTML = textetour;
}
