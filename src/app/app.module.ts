import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
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
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CitiesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
