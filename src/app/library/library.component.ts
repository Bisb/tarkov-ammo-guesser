import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';
import { Caliber } from '../models/caliber';
import { Ammunition } from '../models/ammunition';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent {
  @ViewChild(TemplateRef) template!: TemplateRef<any>;

  public selectedCaliber: Caliber | null = null;
  public selectedAmmunition: Ammunition | null = null;

  constructor(private modalService: NgbModal, public api: ApiService) {
    this.selectedCaliber = api.calibers[0];
    this.selectedAmmunition = this.selectedCaliber.ammunitions[0];
  }

  open() {
    this.modalService.open(this.template, {
      animation: false,
      modalDialogClass: 'modal-dialog-centered',
      fullscreen: 'xxl',
    });
  }

  selectCaliber(caliber: Caliber) {
    this.selectedCaliber = caliber;
    this.selectedAmmunition = caliber.ammunitions[0];
  }
}
