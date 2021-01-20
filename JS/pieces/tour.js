class Tour extends Pion {
  constructor(square, color) {
    super(square.x, square.y, color);
    this.pv = 50;
    this.attaque = 5;
    this.moveCost = 5;
    //Chance échec : 1 - 4
    //Chance touché : 5 - 18
    //Chance critique : 19 - 20
  }

  display() {
      super.display();
      PionBlack = TourBlack;
      PionWhite = TourWhite;
    }

  doubleTour() {
    true;
  }
}
