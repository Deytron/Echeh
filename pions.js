class Roi {
  constructor(square, color) {
    this.x = square.x;
    this.y = square.y;
    this.color = color;
    this.pv = 50;
    this.attaque = 30;
    this.moveCost = 1;
    this.chanceCrit = Math.round(random(1, 20));
  }

  display() {
    if (this.color == 1) {
      image(RoiBlack, this.x, this.y, 50, 50);
    } else {
      image(RoiWhite, this.x, this.y, 50, 50);
    }
  }
}
class Dame {
  constructor(square, color) {
    this.x = square.x;
    this.y = square.y;
    this.color = color;
    this.pv = 50;
    this.attaque = 30;
    this.moveCost = 1;
    this.chanceCrit = Math.round(random(1, 20));
  }

  display() {
    if (this.color == 1) {
      image(DameWhite, this.x, this.y, 50, 50);
    } else {
      image(DameBlack, this.x, this.y, 50, 50);
    }
  }
}

class Fou {
  constructor(square, color) {
    this.x = square.x;
    this.y = square.y;
    this.color = color;
    this.pv = 50;
    this.attaque = 30;
    this.moveCost = 1;
    this.chanceCrit = Math.round(random(1, 20));
  }

  display() {
    if (this.color == 1) {
      image(FouBlack, this.x, this.y, 50, 50);
    } else {
      image(FouWhite, this.x, this.y, 50, 50);
    }
  }
}

class Cavalier {
  constructor(square, color) {
    this.x = square.x;
    this.y = square.y;
    this.color = color;
    this.pv = 50;
    this.attaque = 30;
    this.moveCost = 1;
    this.chanceCrit = Math.round(random(1, 20));
  }

  display() {
    if (this.color == 1) {
      image(CavalierBlack, this.x, this.y, 50, 50);
    } else {
      image(CavalierWhite, this.x, this.y, 50, 50);
    }
  }
}

class Tour {
  constructor(square, color) {
    this.x = square.x;
    this.y = square.y;
    this.color = color;
    this.pv = 50;
    this.attaque = 30;
    this.moveCost = 1;
    this.chanceCrit = Math.round(random(1, 20));
  }

  display() {
    if (this.color == 1) {
      image(TourBlack, this.x, this.y, 50, 50);
    } else {
      image(TourWhite, this.x, this.y, 50, 50);
    }
  }
}

class Pion {
  constructor(square, color) {
    this.x = square.x;
    this.y = square.y;
    this.color = color;
    this.pv = 50;
    this.attaque = 30;
    this.moveCost = 1;
    this.chanceCrit = Math.round(random(1, 20));
  }

  display() {
    if (this.color == 1) {
      image(PionWhite, this.x, this.y, 50, 50);
    } else {
      image(PionBlack, this.x, this.y, 50, 50);
    }
  }
}
