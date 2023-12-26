import { Component, Input } from '@angular/core';
import { Ammunition } from '../../models/ammunition';

@Component({
  selector: 'app-informations[ammunition]',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss'],
})
export class InformationsComponent {
  @Input('ammunition') ammunition!: Ammunition;
}
