class Cavalier extends Pion {
  constructor(square, color) {
    super(x, y, color);
    this.x = square.x;
    this.y = square.y;
    this.color = color;
    this.row = this.y / 50;
    this.col = this.x / 50;
    this.pv = 200;
    this.attaque = 50;
    this.moveCost = 3;
    this.PionWhite = loadImage("assets/knight.png");
    this.PionBlack = loadImage("assets/knight_b.png");
    //Chance échec : 1 - 3
    //Chance touché : 4 - 15
    //Chance critique : 16 - 20
    super.display();
    super.highlight();
    super.superLog();
  }
}
