import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="card shadow border-primary border-opacity-50 card-600">
      <div class="card-body">
        <div class="d-flex flex-column gap-4">
          <a routerLink="/encyclopedia" role="button" class="btn btn-lg btn-outline-primary">Learn</a>
          <a routerLink="/game" role="button" class="btn btn-lg btn-outline-primary">Play</a>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
      }

      .btn {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 30px;
      }`
  ]
})
export class HomeComponent {

}
