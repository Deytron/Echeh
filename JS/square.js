class Carre {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.occupied = false;
  }

  highlight() {
    push();
    strokeWeight(2);
    stroke(255, 255, 0);
    noFill();
    rect(this.x, this.y, 50, 50);
    pop();
  }

  getOccupied() {
    if (this[i].x == pions[i].x && this[i].y == pions[i].y) {
      this.occupied = true;
    }
  }
}
