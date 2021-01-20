class Pion {
  constructor(square, color, x, y) {
    this.x = square.x;
    this.y = square.y;
    this.color = color;
    this.pv = 100;
    this.attaque = 25;
    this.moveCost = 1;
    //Chance échec : 1 - 4
    //Chance touché : 5 - 16
    //Chance critique : 17 - 20
  }

  display() {
    if (this.color == 1) {
      image(PionBlack, this.x, this.y, 50, 50);
    } else {
      image(PionWhite, this.x, this.y, 50, 50);
    }
  }
}
