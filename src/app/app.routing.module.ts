import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { TripsComponent } from './trips/trips.component';
import { CitiesEditComponent } from './cities/cities-edit/cities-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/cities', pathMatch: 'full' },
  { path: 'cities', component: CitiesComponent, children: [
      { path: 'new', component: CitiesEditComponent },
      { path: 'edit/:id', component: CitiesEditComponent }
    ] },
  { path: 'trips', component: TripsComponent },
  { path: '**', redirectTo: '/cities'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
