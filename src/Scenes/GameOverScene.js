// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import "phaser";
import { postData } from "../apiData";

import { getUser } from "../user/user";
class SceneGameOver extends Phaser.Scene {
  constructor() {
    super("GameOver");
  }

  preload() {
    this.load.image("gameOverTitle", "../src/assets/gameover.png");
    this.load.image("sprImg", "../src/assets/catsad2.png");
    this.load.image("BtnPlay", "../src/assets/BtnPlay.png");
    this.load.image("BtnPlayHover", "../src/assets/BtnPlayHover.png");
    this.load.image("BtnPlayDown", "../src/assets/BtnPlayDown.png");
    this.load.audio("gameOverMusic", "../src/assets/musicGameOver.mp3");
  }

  create() {
    this.add.image(this.game.config.width * 0.5, 240, "sprImg").setScale(0.35);
    this.add
      .image(this.game.config.width * 0.52, 80, "gameOverTitle")
      .setScale(0.7);

    this.btnRestart = this.add.sprite(
      this.game.config.width * 0.5,
      this.game.config.height * 0.85,
      "BtnPlay"
    );

    this.restartTitle = this.add.text(
      this.game.config.width * 0.39,
      this.game.config.height * 0.825,
      "RESTART",
      {
        fontFamily: "Righteous",
        fontSize: 25,
        fontStyle: "bold",
        color: "#68593ff5",
        align: "center",
      }
    );

    this.score = this.add.text(
      this.game.config.width * 0.3,
      360,
      `Your Score is: ${localStorage.getItem("score")}`,
      {
        fontFamily: "monospace",
        fontSize: 20,
        fontStyle: "bold",
        color: "#ffffff",
        align: "center",
      }
    );

    this.btnRestart.setInteractive();
    this.btnRestart.setScale(0.8);

    const pointOver = (button) => {
      button.on(
        "pointerover",
        () => {
          button.setTexture("BtnPlayHover");
        },
        this
      );
    };

    const pointOut = (button) => {
      button.on("pointerout", () => {
        button.setTexture("BtnPlay");
      });
    };

    const pointDown = (button) => {
      button.on(
        "pointerdown",
        () => {
          button.setTexture("BtnPlayDown");
        },
        this
      );
    };

    const pointUp = (button) => {
      button.on(
        "pointerup",
        () => {
          button.setTexture("BtnPlay");
        },
        this
      );
    };

    const goToScene = (button, scene) => {
      button.on(
        "pointerup",
        () => {
          button.setTexture("BtnPlay");
          this.scene.start(scene);
          this.gameOver.destroy();
        },
        this
      );
    };

    pointOver(this.btnRestart);
    pointOut(this.btnRestart);
    pointDown(this.btnRestart);
    pointUp(this.btnRestart);
    goToScene(this.btnRestart, "Game");

    const user = getUser();

    postData(user);
  }
}

export default SceneGameOver;
