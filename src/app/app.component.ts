import { Component, ViewChild } from '@angular/core';
import { ApiService } from './api.service';
import { GameComponent } from './game/game.component';
import { LibraryComponent } from './library/library.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('game') game!: GameComponent;
  @ViewChild('library') library!: LibraryComponent;

  constructor(public api: ApiService, public router: Router) {
  }
}
