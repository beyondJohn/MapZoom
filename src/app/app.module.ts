import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { TopComponent } from './topbar/topbar.component';

import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'map',
    component: MapComponent,
    data: { title: 'Map'}
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home'}
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BottombarComponent,
    MapComponent,
    HomeComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
