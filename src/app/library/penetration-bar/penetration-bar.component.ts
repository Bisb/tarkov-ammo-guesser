import { Component, Input } from '@angular/core';
import { Ammunition } from '../../models/ammunition';

@Component({
  selector: 'app-penetration-bar[ammunition]',
  templateUrl: './penetration-bar.component.html',
  styleUrls: ['./penetration-bar.component.scss']
})
export class PenetrationBarComponent {
  @Input('ammunition') ammunition!: Ammunition;

  readonly armorClasses = [...Array(6).keys()].map(v => v + 1);
}
