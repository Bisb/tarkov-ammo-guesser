import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { OptionsComponent } from './options/options.component';
import { GameComponent } from './game/game.component';
import { LibraryComponent } from './library/library.component';
import { PenetrationSortPipe } from './pipes/penetration-sort.pipe';
import { InformationsComponent } from './library/informations/informations.component';
import { PenetrationBarComponent } from './library/penetration-bar/penetration-bar.component';
import { CaliberSortPipe } from './pipes/caliber-sort.pipe';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    GameComponent,
    LibraryComponent,
    PenetrationSortPipe,
    InformationsComponent,
    PenetrationBarComponent,
    CaliberSortPipe,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    RouterOutlet,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
