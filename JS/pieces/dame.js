class Dame extends Pion{
  constructor(square, color) {
    super(square.x, square.y, color);
    this.pv = 150;
    this.attaque = 25;
    this.moveCost = 9;
    //Chance échec : 1 - 5
    //Chance touché : 6 - 17
    //Chance critique : 18 - 20
  }

  display() {
    super.display();
    PionBlack = DameBlack;
    PionWhite = DameWhite;
  }
}
