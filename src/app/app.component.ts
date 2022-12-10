import { Component, ViewChild } from '@angular/core';
import { ApiService } from './api.service';
import { GameComponent } from './game/game.component';
import { LibraryComponent } from './library/library.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('game') game!: GameComponent;
  @ViewChild('library') library!: LibraryComponent;
  optionsOpened: boolean = false;

  constructor(public api: ApiService) {
  }

  onOptionChanged() {
    if (this.game) {
      this.game.next();
    }
  }
}
