class Roi extends Pion {
  constructor(square, color) {
    super(square.x, square.y, color);
    this.pv = 50;
    this.attaque = 30;
    this.moveCost = 1;
    //Chance échec : 1 - 10
    //Chance touché : Na/n
    //Chance critique : 11 - 20
  }

  display() {
    super.display();
    PionBlack = RoiBlack;
    PionWhite = RoiWhite;
  }
}
