import 'phaser';
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import PreloaderScene from './Scenes/PreloaderScene';
import LeaderboardScene from './Scenes/LeaderboardScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import GameOverScene from './Scenes/GameOverScene';
import Model from './Model';
import { setUser } from './user/user';
import './user/dom';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Leaderboard', LeaderboardScene);
    this.scene.add('Game', GameScene);
    this.scene.add('GameOver', GameOverScene);
    this.scene.start('Preloader');
  }
}

export default (user) => {
  setUser(user);
  window.game = new Game();
};
