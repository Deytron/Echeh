class Cavalier extends Pion {
  constructor(square, color) {
    super(x, y, color);
    this.pv = 200;
    this.attaque = 50;
    this.moveCost = 3;
    //Chance échec : 1 - 3
    //Chance touché : 4 - 15
    //Chance critique : 16 - 20
  }

  display() {
    super.display();
    PionBlack = CavalierBlack;
    PionWhite = CavalierWhite;
  }
}
