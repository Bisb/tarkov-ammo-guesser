import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { OptionsComponent } from './options/options.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'encyclopedia', component: LibraryComponent},
  {path: 'settings', component: OptionsComponent},
  {path: 'game', component: GameComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
