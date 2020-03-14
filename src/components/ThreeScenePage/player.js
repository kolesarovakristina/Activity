var TWEEN = require("@tweenjs/tween.js");
export class Player {
  constructor(initialX, initialZ, model) {
    this.x = initialX;
    this.z = initialZ;
    this.model = model;
    this.actualPosition = 1;
    this.actualRow = 0;
    this.COLUMNSCOUNT = 4;
    this.finalPosition = 32;
    model.position.z = initialZ;
    model.position.x = initialX;
    this.tween = new TWEEN.Tween({ x: initialX, z: initialZ });
    this.tween.onUpdate(o => {
      console.log("daco");
      if (this.model) {
        this.model.position.x = o.x;
        this.model.position.z = o.z;
      }
    });
  }

  getTweenUpdate() {
    return this.tween.update();
  }

  getModel() {
    return this.model;
  }
  
 
  // goToLeft(z) {
  //   this.z += z;
  //   this.tween
  //     .to({ z: this.z }, 1000)
  //     .easing(TWEEN.Easing.Quadratic.Out)
  //     .start();
  // }
  // goToRightAction(z) {
  //   return {type: 'GOTO_RIGHT_', z: z-1};
  //   // this.z -= z;
  //   // this.tween
  //   //   .to({ z: this.z }, 1000)
  //   //   .easing(TWEEN.Easing.Quadratic.Out)
  //   //   .start();
  // }
  // goDown(x) {
  //   this.tween
  //     .to({ x: this.x }, 1000)
  //     .easing(TWEEN.Easing.Quadratic.Out)
  //     .start();
  // }
}
