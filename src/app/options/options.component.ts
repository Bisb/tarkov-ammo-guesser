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

  toggleCaliber(caliber: string, event: Event): void {
    if (event instanceof PointerEvent && event.ctrlKey) {
      if (!this.optionService.ignoredCalibers.includes(caliber)) {
        event.preventDefault();
      }
      this.optionService.ignoredCalibers = this.api.calibers.filter(tCaliber => tCaliber.name !== caliber)
        .map(tCaliber => tCaliber.name);
    } else {
      if (this.optionService.ignoredCalibers.includes(caliber)) {
        this.optionService.ignoredCalibers = this.optionService.ignoredCalibers
          .filter(tCaliber => tCaliber !== caliber)
      } else {
        this.optionService.ignoredCalibers.push(caliber);
        this.optionService.ignoredCalibers = this.optionService.ignoredCalibers;
      }
    }
    this.onChange.emit();
  }

  selectAllCalibers() {
    this.optionService.ignoredCalibers = [];
  }

  toggleLimitedChoice() {
    this.optionService.limitedChoice = !this.optionService.limitedChoice;
    this.onChange.emit();
  }

  toggleShowCaliber() {
    this.optionService.showCaliber = !this.optionService.showCaliber;
    this.onChange.emit();
  }

  forceDataRefresh() {
    this.api.deleteLocalData();
    window.location.reload();
  }
}
