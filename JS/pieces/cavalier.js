class Cavalier extends Pion {
  constructor(square, color) {
    super(x, y, color);
    this.x = square.x;
    this.y = square.y;
    this.color = color;
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
  }
}
