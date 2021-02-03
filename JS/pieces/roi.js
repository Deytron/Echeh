class Roi extends Pion {
  constructor(square, color) {
    super(x, y, color);
    this.pv = 50;
    this.attaque = 30;
    this.moveCost = 1;
    //Chance échec : 1 - 10
    //Chance touché : Na/n
    //Chance critique : 11 - 20
  }

  display() {
    RoiWhite = loadImage("assets/king.png");
    RoiBlack = loadImage("assets/king_b.png");
    super.display();
  }
}
