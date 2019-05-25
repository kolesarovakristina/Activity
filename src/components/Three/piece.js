var TWEEN = require("@tweenjs/tween.js");
export class Player {
  constructor(initialX, initialZ) {
    this.x = initialX;
    this.z = initialZ;
    this.actualPosition = 1;
    this.actualRow = 0;
    this.COLUMNSCOUNT = 4;
    this.tween = new TWEEN.Tween({ x: initialX, z: initialZ });
    this.tween.onUpdate(o => {
      if (this.model) {
        this.model.position.x = o.x;
        this.model.position.z = o.z;
      }
    });
  }
  setModel(model) {
    this.model = model;
  }
  getTweenUpdate() {
    return this.tween.update();
  }
  moveForward() {
    if (this.actualPosition % this.COLUMNSCOUNT === 0) {
      this.goDown(1);
      this.actualPosition += 1;
      console.log("down");
      return;
    }

    if (Math.ceil(this.actualPosition / this.COLUMNSCOUNT) % 2 === 0) {
      this.goToLeft(1);
      this.actualPosition += 1;
      console.log("left");
    }
    if (Math.ceil(this.actualPosition / this.COLUMNSCOUNT) % 2 === 1) {
      this.goToRight(1);
      this.actualPosition += 1;
    }
  }
  goToLeft(z) {
    this.z += z;
    this.tween
      .to({ z: this.z }, 1000)
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();
    console.log("goleft", z);
  }
  goToRight(z) {
    this.z -= z;
    this.tween
      .to({ z: this.z }, 1000)
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();
  }
  goDown(x) {
    this.x += x;
    this.tween
      .to({ x: this.x }, 1000)
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();
  }
}
