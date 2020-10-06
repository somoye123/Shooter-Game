// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import Phaser from "phaser";
import Entity from "./Entity";
import EnemyLaser from './EnemyLaser';

export default class CarrierShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "sprEnemy2", "CarrierShip");
    this.play("sprEnemy2");
    this.body.velocity.y = Phaser.Math.Between(50, 100);






    // this.shootTimer = this.scene.time.addEvent({
    //   delay: 1000,
    //   callback() {
    //     const laser = new EnemyLaser(this.scene, this.x, this.y);
    //     laser.setScale(2);
    //     this.scene.enemyLasers.add(laser);
    //   },
    //   callbackScope: this,
    //   loop: true,
    // });

    // this.play("sprEnemy2");
  }

  // onDestroy() {
  //   if (this.shootTimer !== undefined) {
  //     if (this.shootTimer) {
  //       this.shootTimer.remove(false);
  //     }
  //   }
  // }
}
