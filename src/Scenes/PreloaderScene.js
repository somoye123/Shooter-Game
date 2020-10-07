/* eslint-disable no-undef, no-plusplus,radix,import/extensions */
import "phaser";

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    this.add.image(750, 400, "logo");
    this.add.image(400, 300, "background");

    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: "Loading...",
      style: {
        font: "20px monospace",
        fill: "#ffffff",
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: "0%",
      style: {
        font: "18px monospace",
        fill: "#ffffff",
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: "",
      style: {
        font: "18px monospace",
        fill: "#ffffff",
      },
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on("progress", (value) => {
      percentText.setText(`${parseInt(value * 100)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on("fileprogress", (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    this.load.on("complete", () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    this.load.image("sprBg0", "../src/assets/sprBg0.png");
    this.load.image("sprBg1", "../src/assets/sprBg1.png");
    this.load.spritesheet("sprExplosion", "../src/assets/sprExplosion.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("sprEnemy0", "../src/assets/sprEnemy0.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.image("sprEnemy1", "../src/assets/sprEnemy1.png");
    this.load.spritesheet("sprEnemy2", "../src/assets/sprEnemy2.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.image("sprLaserEnemy0", "../src/assets/sprLaserEnemy0.png");
    this.load.image("sprLaserPlayer", "../src/assets/sprLaserPlayer.png");
    this.load.spritesheet("sprPlayer", "../src/assets/sprPlayer.png", {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.audio("sndExplode0", "../src/assets/sndExplode0.wav");
    this.load.audio("sndExplode1", "../src/assets/sndExplode1.wav");
    this.load.audio("sndLaser", "../src/assets/sndLaser.wav");
    this.load.image("highScore", "../src/assets/highscore.png");
    this.load.image("Btnback", "../src/assets/btnBack.png");
    this.load.image("Btnbackhover", "../src/assets/btnBackHover.png");
    this.load.image("blueButton1", "../src/assets/ui/blue_button02.png");
    this.load.image("blueButton2", "../src/assets/ui/blue_button03.png");
    this.load.image("phaserLogo", "../src/assets/logo.png");
    this.load.image("box", "../src/assets/ui/grey_box.png");
    this.load.image("checkedBox", "../src/assets/ui/blue_boxCheckmark.png");
    this.load.image("platform", "../src/assets/ground.png");
    this.load.image("background", "../src/assets/forest-bg.png");
    this.load.image("game-over", "../src/assets/game-over.png");
    this.load.spritesheet("player", "../src/assets/player.png", {
      frameWidth: 24,
      frameHeight: 48,
    });
    this.load.spritesheet("coin", "../src/assets/star.png", {
      frameWidth: 20,
      frameHeight: 20,
    });
    this.load.spritesheet("fire", "../src/assets/fire.png", {
      frameWidth: 40,
      frameHeight: 70,
    });
    this.load.audio("bgMusic", ["../src/assets/TownTheme.mp3"]);

    this.load.image("gameOverTitle", "../src/assets/gameover.png");
    this.load.image("sprImg", "../src/assets/catsad2.png");
    this.load.image("BtnPlay", "../src/assets/BtnPlay.png");
    this.load.image("BtnPlayHover", "../src/assets/BtnPlayHover.png");
    this.load.image("BtnPlayDown", "../src/assets/BtnPlayDown.png");
    this.load.audio("gameOverMusic", "../src/assets/musicGameOver.mp3");
  }

  ready() {
    this.scene.start("Title");
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start("Title");
    }
  }
}
