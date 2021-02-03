class Fou extends Pion {
  constructor(square, color) {
    super(x, y, color);
    this.pv = 150;
    this.attaque = 30;
    this.moveCost = 3;
    //Chance échec : 1 - 6
    //Chance touché : 7 - 14
    //Chance critique : 15 - 20
  }

  display() {
    super.display();
    PionBlack = FouBlack;
    PionWhite = FouWhite;
  }
}
