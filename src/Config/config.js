import 'phaser';

export default {
  type: Phaser.AUTO,
  width: 900,
  height: 800,
  backgroundColor: 0x34495e,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [],
  pixelArt: true,
  roundPixels: true,
};
