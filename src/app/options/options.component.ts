import { Component, EventEmitter, Output } from '@angular/core';
import { OptionService } from './option.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent {
  @Output() onChange = new EventEmitter;

  constructor(public optionService: OptionService, public api: ApiService) {
  }

  toggleCaliber(caliber: string) {
    if (this.optionService.ignoredCalibers.includes(caliber)) {
      this.optionService.ignoredCalibers = this.optionService.ignoredCalibers
        .filter(tCaliber => tCaliber !== caliber)
    } else {
      this.optionService.ignoredCalibers.push(caliber);
      this.optionService.ignoredCalibers = this.optionService.ignoredCalibers;
    }
    this.onChange.emit();
  }

  toggleLimitedChoice() {
    this.optionService.limitedChoice = !this.optionService.limitedChoice;
    this.onChange.emit();
  }
}
