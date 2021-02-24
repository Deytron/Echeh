class Dame extends Pion {
  constructor(square, color) {
    super(x, y, color);
    this.x = square.x;
    this.y = square.y;
    this.color = color;
    this.row = this.y / 50;
    this.col = this.x / 50;
    this.pv = 150;
    this.attaque = 25;
    this.moveCost = 9;
    this.PionWhite = loadImage("assets/queen.png");
    this.PionBlack = loadImage("assets/queen_b.png");
    //Chance échec : 1 - 5
    //Chance touché : 6 - 17
    //Chance critique : 18 - 20
    super.display();
    super.highlight();
  }
}
