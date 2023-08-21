import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CitiesService } from './cities/cities.service';
import { CitiesEditComponent } from './cities/cities-edit/cities-edit.component';
import { CitiesListComponent } from './cities/cities-list/cities-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { TripsComponent } from './trips/trips.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CitiesComponent,
    CitiesListComponent,
    CitiesEditComponent,
    TripsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CitiesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
