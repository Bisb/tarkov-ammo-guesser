import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark" aria-label="Tenth navbar example">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain"
                aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-center" id="navbarMain">
          <div class="navbar-brand d-none d-md-block">
            <a routerLink="/" class="nav-link">
              Guess the Ammo
            </a>
          </div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" routerLink="/game">
                <i class="bi bi-dpad-fill"></i>
                Game
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/encyclopedia">
                <i class="bi bi-book-fill"></i>
                Encyclopedia
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/settings">
                <i class="bi bi-gear-fill"></i>
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class HeaderComponent {

}
