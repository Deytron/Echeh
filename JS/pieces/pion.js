class Pion {
  constructor(square, color) {
    this.x = square.x;
    this.y = square.y;
    this.color = color;
    this.row = this.y / 50;
    this.col = this.x / 50;
    this.pv = 100;
    this.attaque = 25;
    this.moveCost = 1;
    this.PionWhite = loadImage("assets/pawn.png");
    this.PionBlack = loadImage("assets/pawn_b.png");
    //Chance échec : 1 - 4
    //Chance touché : 5 - 16
    //Chance critique : 17 - 20
  }

  display() {
    if (this.color == 1) {
      image(this.PionBlack, this.x, this.y, 50, 50);
    } else {
      image(this.PionWhite, this.x, this.y, 50, 50);
    }
  }

  superLog() {
    console.log(this.row, this.col);
  }

  highlight() {
    if (
      mouseX > this.x &&
      mouseX < this.x + 50 &&
      mouseY > this.y &&
      mouseY < this.y + 50
    ) {
      if (this.color == tour) {
        fill("yellow");
        square(this.x, this.y, 50);
        this.display();
        if (mouseIsPressed) {
          fill("cyan");
          square(this.x, this.y, 50);
          this.display();
        }
      }
    }
  }
}
