class Tour extends Pion {
  constructor(square, color) {
    super(x, y, color);
    this.x = square.x;
    this.y = square.y;
    this.color = color;
    this.row = this.y / 50;
    this.col = this.x / 50;
    this.pv = 50;
    this.attaque = 5;
    this.moveCost = 5;
    this.PionWhite = loadImage("assets/rook.png");
    this.PionBlack = loadImage("assets/rook_b.png");
    //Chance échec : 1 - 4
    //Chance touché : 5 - 18
    //Chance critique : 19 - 20
    super.display();
    super.highlight();
  }

  doubleTour() {
    true;
  }
}
