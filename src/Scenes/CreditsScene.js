import Phaser from 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.add.image(500, 400, 'background');

    this.title = this.add.text(0, 0, 'Guns Of Boom', {
      fontSize: '40px',
      fontStyle: 'bold',
      fill: '#fff',
    });
    this.madeByText = this.add.text(0, 0, 'Created By Somoye Ayotunde', {
      fontSize: '28px',
      fill: '#fff',
    });
    this.descriptionTopText = this.add.text(
      0,
      0,
      'Microverse Capstone Project',
      { fontSize: '28px', fill: '#fff' },
    );
    this.descriptionBottomText = this.add.text(
      0,
      0,
      'Final Project in the JS Course',
      { fontSize: '28px', fill: '#fff' },
    );
    this.credits = this.add.text(0, 0, 'Credits', {
      fontSize: '32px',
      fill: '#fff',
    });
    this.creditsPhaser = this.add.text(0, 0, 'Phaser 3', {
      fontSize: '26px',
      fill: '#fff',
    });
    this.creditsGDA = this.add.text(0, 0, 'https://learn.yorkcs.com', {
      fontSize: '26px',
      fill: '#fff',
    });
    this.creditsOGA = this.add.text(0, 0, 'OpenGameArt', {
      fontSize: '26px',
      fill: '#fff',
    });
    this.zone = this.add.zone(
      config.width / 2,
      config.height / 2,
      config.width,
      config.height,
    );

    Phaser.Display.Align.In.Center(this.title, this.zone);

    Phaser.Display.Align.In.Center(this.madeByText, this.zone);

    Phaser.Display.Align.In.Center(this.descriptionTopText, this.zone);

    Phaser.Display.Align.In.Center(this.descriptionBottomText, this.zone);

    Phaser.Display.Align.In.Center(this.credits, this.zone);

    Phaser.Display.Align.In.Center(this.creditsPhaser, this.zone);

    Phaser.Display.Align.In.Center(this.creditsGDA, this.zone);

    Phaser.Display.Align.In.Center(this.creditsOGA, this.zone);

    this.title.displayOriginY = 225;
    this.madeByText.displayOriginY = 180;
    this.descriptionTopText.displayOriginY = 130;
    this.descriptionBottomText.displayOriginY = 90;
    this.credits.displayOriginY = 10;
    this.creditsPhaser.displayOriginY = -50;
    this.creditsGDA.displayOriginY = -90;
    this.creditsOGA.displayOriginY = -130;

    this.menuButton = new Button(
      this,
      450,
      600,
      'blueButton1',
      'blueButton2',
      'Menu',
      'Title',
    );
  }
}
