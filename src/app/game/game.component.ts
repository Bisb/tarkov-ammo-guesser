import { Component } from '@angular/core';
import { Ammunition } from '../models/ammunition';
import { Caliber } from '../models/caliber';
import { ApiService } from '../api.service';
import { OptionService } from '../options/option.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  public answer?: Ammunition;
  public ammunition!: Ammunition;
  public choices: Ammunition[] = [];
  public score: number = 0;

  constructor(public api: ApiService, public options: OptionService) {
    this.generateRandomAmmunition();
  }

  generateRandomAmmunition(): void {
    this.ammunition = this.getRandomAmmunition();
    let choices = this.getAmmunitionsPerCaliber(this.ammunition.caliber);
    if (this.options.limitedChoice) {
      choices = this.shuffleArray(choices)
        .filter(choice => choice !== this.ammunition);
      choices = choices.slice(0, 3);
      choices.push(this.ammunition);
      this.choices = this.shuffleArray(choices);
    } else {
      this.choices = choices;
    }
  }

  getRandomAmmunition(): Ammunition {
    const previous = this.ammunition;
    const ammunitions = this.api.ammunitions.filter(ammunition => !this.options.ignoredCalibers.includes(ammunition.caliber.name));
    const ammunition = this.shuffleArray(ammunitions)[0];
    if (ammunition === previous) {
      return this.getRandomAmmunition();
    }
    return ammunition;
  }

  getAmmunitionsPerCaliber(caliber: Caliber) {
    return this.api.ammunitions.filter(ammunition => ammunition.caliber === caliber);
  }

  submit(ammunition: Ammunition) {
    this.answer = ammunition;
    this.score = ammunition === this.ammunition ? this.score + 1 : 0;
  }

  next() {
    this.answer = undefined;
    this.generateRandomAmmunition();
  }

  shuffleArray(array: any[]) {
    return array.sort(() => 0.5 - Math.random());
  }
}
