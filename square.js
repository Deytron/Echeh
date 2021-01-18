function Square(_x, _y) {
  this.x = _x;
  this.y = _y;

  this.occupied = false;

  this.highlight = function () {
    push();
    strokeWeight(2);
    stroke(255, 255, 0);
    noFill();
    rect(this.x, this.y, 50, 50);
    pop();
  };
}
