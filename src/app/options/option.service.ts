import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OptionService {
  private readonly favoriteCaliberKey: string = 'ignored_calibers';
  private _ignoredCalibers: string[] = [];

  private readonly limitedChoiceKey: string = 'limited_choice';
  private _limitedChoice: boolean = true;

  private readonly showCaliberKey: string = 'show_caliber';
  private _showCaliber: boolean = true;

  constructor() {
    this.ignoredCalibers = this.loadIgnoredCalibers();
    this.limitedChoice = this.loadLimitedChoice();
    this.showCaliber = this.loadShowCaliber();
  }

  get ignoredCalibers(): string[] {
    return this._ignoredCalibers;
  }

  set ignoredCalibers(value: string[]) {
    this._ignoredCalibers = value;
    localStorage.setItem(this.favoriteCaliberKey, JSON.stringify(value));
  }

  private loadIgnoredCalibers(): string[] {
    const item = localStorage.getItem(this.favoriteCaliberKey);
    if (item) {
      return (JSON.parse(item));
    }
    return [];
  }

  get limitedChoice(): boolean {
    return this._limitedChoice;
  }

  set limitedChoice(value: boolean) {
    this._limitedChoice = value;
    localStorage.setItem(this.limitedChoiceKey, JSON.stringify(value));
  }

  private loadLimitedChoice(): boolean {
    const item = localStorage.getItem(this.limitedChoiceKey);
    if (item) {
      return (JSON.parse(item));
    }
    return true;
  }

  get showCaliber(): boolean {
    return this._showCaliber;
  }

  set showCaliber(value: boolean) {
    this._showCaliber = value;
  }

  private loadShowCaliber(): boolean {
    const item = localStorage.getItem(this.showCaliberKey);
    if (item) {
      return (JSON.parse(item));
    }
    return true;
  }
}
