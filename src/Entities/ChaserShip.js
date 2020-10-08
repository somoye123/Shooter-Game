// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import Phaser from 'phaser';
import Entity from './Entity';
import EnemyLaser from './EnemyLaser';

export default class ChaserShip extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'sprEnemy1', 'ChaserShip');
    this.body.velocity.y = Phaser.Math.Between(50, 100);
    this.states = {
      MOVE_DOWN: 'MOVE_DOWN',
      CHASE: 'CHASE',
    };
    this.state = this.states.MOVE_DOWN;

    // this.play('sprEnemy0');
    // this.shootTimer = this.scene.time.addEvent({
    //   delay: 1000,
    //   callback() {
    //     const laser = new EnemyLaser(
    //       this.scene,
    //       this.x,
    //       this.y,
    //     );
    //     laser.setScale(2);
    //     this.scene.enemyLasers.add(laser);
    //   },
    //   callbackScope: this,
    //   loop: true,
    // });
    // this.play('sprEnemy0');
  }

  // onDestroy() {
  //   if (this.shootTimer !== undefined) {
  //     if (this.shootTimer) {
  //       this.shootTimer.remove(false);
  //     }
  //   }
  // }

  update() {
    if (!this.getData('isDead') && this.scene.player) {
      if (
        Phaser.Math.Distance.Between(
          this.x,
          this.y,
          this.scene.player.x,
          this.scene.player.y,
        ) < 320
      ) {
        this.state = this.states.CHASE;
      }

      if (this.state === this.states.CHASE) {
        const dx = this.scene.player.x - this.x;
        const dy = this.scene.player.y - this.y;

        const angle = Math.atan2(dy, dx);

        const speed = 100;
        this.body.setVelocity(Math.cos(angle) * speed, Math.sin(angle) * speed);
      }
      if (this.x < this.scene.player.x) {
        this.angle -= 5;
      } else {
        this.angle += 5;
      }
    }
  }
}
