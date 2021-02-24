//1 = Noir
//0 = Blanc

//Définition tableau
let squares = [];
let pions = [];

//Définition valeurs jeu
let cnv;
let tour;
let blanc = 255;
let noir = 0;
let deplacements = 20;
let totalSeconds = 0;
let minu = 0;
let sec = 0;
let moveleft;

//Chargement des assets avant que les fonctions draw() soient appelées
function preload() {
  // RoiWhite = loadImage("assets/king.png");
  // RoiBlack = loadImage("assets/king_b.png");
  // DameWhite = loadImage("assets/queen.png");
  // DameBlack = loadImage("assets/queen_b.png");
  // FouWhite = loadImage("assets/bishop.png");
  // FouBlack = loadImage("assets/bishop_b.png");
  // CavalierWhite = loadImage("assets/knight.png");
  // CavalierBlack = loadImage("assets/knight_b.png");
  // TourWhite = loadImage("assets/rook.png");
  // TourBlack = loadImage("assets/rook_b.png");
}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  frameRate(60);
  cnv = createCanvas(500, 800);
  centerCanvas();
  //Creation squares
  for (y = 0; y < height; y += 50) {
    for (x = 0; x < width; x += 50) {
      carre = new Carre(x, y);
      squares.push(carre);
    }
  }
  //Sélection tour aléatoire au setup
  tour = Math.round(random());
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
    Pawn = new Pion(squares[i], 1);
    pions.push(Pawn);
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
    Pawn = new Pion(squares[i], 0);
    pions.push(Pawn);
  }
}

function mouseLocation() {
  for (i = 0; i < pions.length; i++) {}
}

function mousePressed() {
  console.log(clique);
}

function nextTour() {
  if (tour == 1) {
    tour = 0;
  } else if (tour == 0) {
    tour = 1;
  }
  drawWords();
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
    pions[i].highlight();
  }
  mouseLocation();
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
}

function drawWords() {
  if (tour == 0) {
    textetour = "blancs";
  } else {
    textetour = "noirs";
  }
  document.getElementById("couleur").innerHTML = textetour;
}
