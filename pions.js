class King {
  constructor(square, color) {
    this.x = square.x + 25;
    this.y = square.y + 25;
    this.color = color;
    this.height = 50;
    this.width = 50;
    this.pv = 50;
    this.attaque = 30;
    this.moveCost = 1;
    this.chanceCrit = Math.round(random(1, 20));
  }

  show() {
    if (color == 0) {
      image(kingBlackImg, 25, 25);
    } else {
      image(kingWhiteImg, x, y);
    }
  }
}
