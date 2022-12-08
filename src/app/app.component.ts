import { Component } from '@angular/core';
import { Ammunition } from './models/ammunition';
import { ApiService } from './api.service';
import { Caliber } from './models/caliber';
import { OptionService } from './options/option.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public answer?: Ammunition;
  public ammunition!: Ammunition;
  public choices: Ammunition[] = [];
  public score: number = 0;

  constructor(public api: ApiService, public options: OptionService) {
    api.$loaded.subscribe(loaded => {
      if (loaded) {
        this.generateRandomAmmunition();
      }
    });
  }

  generateRandomAmmunition(): void {
    this.ammunition = this.getRandomAmmunition();
    let choices = this.shuffleArray(this.getAmmunitionsPerCaliber(this.ammunition.caliber))
      .filter(choice => choice !== this.ammunition);
    if (this.options.limitedChoice) {
      choices = choices.slice(0, 3);
    }

    choices.push(this.ammunition);
    this.choices = this.shuffleArray(choices);
  }

  getRandomAmmunition(): Ammunition {
    const ammunitions = this.api.ammunitions.filter(ammunition => !this.options.ignoredCalibers.includes(ammunition.caliber.name));
    return this.shuffleArray(ammunitions)[0];
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
