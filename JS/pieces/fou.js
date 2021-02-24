class Fou extends Pion {
  constructor(square, color) {
    super(x, y, color);
    this.x = square.x;
    this.y = square.y;
    this.color = color;
    this.pv = 150;
    this.attaque = 30;
    this.moveCost = 3;
    this.PionWhite = loadImage("assets/bishop.png");
    this.PionBlack = loadImage("assets/bishop_b.png");
    //Chance échec : 1 - 6
    //Chance touché : 7 - 14
    //Chance critique : 15 - 20
    super.display();
    super.highlight();
  }
}
