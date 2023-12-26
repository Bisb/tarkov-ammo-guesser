import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';
import { Caliber } from '../models/caliber';
import { Ammunition } from '../models/ammunition';
import { PenetrationSortPipe } from '../pipes/penetration-sort.pipe';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent {
  @ViewChild(TemplateRef) template!: TemplateRef<any>;
  @Output('onModalOpen') onModalOpen = new EventEmitter();

  public selectedCaliber: Caliber | null = null;
  public selectedAmmunition: Ammunition | null = null;

  constructor(private modalService: NgbModal, public api: ApiService) {
    this.selectCaliber(api.calibers[0]);
  }

  open() {
    this.modalService.open(this.template, {
      animation: false,
      size: 'lg',
      fullscreen: 'lg',
    });
    this.onModalOpen.emit();
  }

  selectCaliber(caliber: Caliber) {
    this.selectedCaliber = caliber;
    const ammunitions = (new PenetrationSortPipe()).transform(caliber.ammunitions);
    this.selectedAmmunition = ammunitions[0];
  }
}
