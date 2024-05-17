class liq {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
  }

  show() {
    noStroke();
    fill(175);
    rect(this.x, this.y, this.w, this.h);
  }

  contains(mover) {
    let pos = mover.pos;
    return (
      pos.x > this.x &&
      pos.x < this.x + this.w &&
      pos.y > this.y &&
      pos.y < this.y + this.h
    );
  }

  getDrag(mover) {
    let speed = mover.vel.mag();
    let dragMag = this.c * speed * speed;

    let dragForce = mover.vel.copy();
    dragForce.mult(-1);

    dragForce.setMag(dragMag);
    return dragForce;
  }
}
