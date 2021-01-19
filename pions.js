class Roi {
  constructor(square, color) {
    this.x = square.x;
    this.y = square.y;
    this.color = color;
    this.pv = 50;
    this.attaque = 30;
    this.moveCost = 1;
    //Chance échec : 1 - 10
    //Chance touché : Na/n
    //Chance critique : 11 - 20
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
    this.pv = 150;
    this.attaque = 25;
    this.moveCost = 9;
    //Chance échec : 1 - 5
    //Chance touché : 6 - 17
    //Chance critique : 18 - 20
  }

  display() {
    if (this.color == 1) {
      image(DameBlack, this.x, this.y, 50, 50);
    } else {
      image(DameWhite, this.x, this.y, 50, 50);
    }
  }
}

class Fou {
  constructor(square, color) {
    this.x = square.x;
    this.y = square.y;
    this.color = color;
    this.pv = 150;
    this.attaque = 30;
    this.moveCost = 3;
    //Chance échec : 1 - 6
    //Chance touché : 7 - 14
    //Chance critique : 15 - 20
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
    this.pv = 200;
    this.attaque = 50;
    this.moveCost = 3;
    //Chance échec : 1 - 3
    //Chance touché : 4 - 15
    //Chance critique : 16 - 20
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
    this.attaque = 5;
    this.moveCost = 5;
    //Chance échec : 1 - 4
    //Chance touché : 5 - 18
    //Chance critique : 19 - 20
  }

  display() {
    if (this.color == 1) {
      image(TourBlack, this.x, this.y, 50, 50);
    } else {
      image(TourWhite, this.x, this.y, 50, 50);
    }
  }

  doubleTour() {
    true;
  }
}

class Pion {
  constructor(square, color) {
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
