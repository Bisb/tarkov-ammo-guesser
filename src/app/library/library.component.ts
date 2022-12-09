import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent {
  @ViewChild('button') button!: ElementRef;

  constructor(private modalService: NgbModal, public api: ApiService) {
  }

  open(content: any) {
    this.modalService.open(content, {animation: false, modalDialogClass: 'modal-dialog-centered', size: 'xl'});
  }

  ngAfterViewInit() {
    console.log(this.button.nativeElement.click());
  }
}
