import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CitiesEditComponent } from './cities/cities-edit/cities-edit.component';
import { CitiesListComponent } from './cities/cities-list/cities-list.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CitiesComponent,
    CitiesListComponent,
    CitiesEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
