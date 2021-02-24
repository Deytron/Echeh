class Roi extends Pion {
  constructor(square, color) {
    super(x, y, color);
    this.x = square.x;
    this.y = square.y;
    this.color = color;
    this.pv = 50;
    this.attaque = 30;
    this.moveCost = 1;
    this.PionWhite = loadImage("assets/king.png");
    this.PionBlack = loadImage("assets/king_b.png");
    //Chance échec : 1 - 10
    //Chance touché : Na/n
    //Chance critique : 11 - 20
    super.display();
    super.highlight();
  }
}
