import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageJumbotronComponent } from './home-page-jumbotron/home-page-jumbotron.component';
import { HomePageArgumentsComponent } from './home-page-arguments/home-page-arguments.component';
import { HomePageMapComponent } from './home-page-map/home-page-map.component';
import { HomePageArgumentComponent } from './home-page-argument/home-page-argument.component';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [
    HomePageJumbotronComponent,
    HomePageArgumentsComponent,
    HomePageMapComponent
  ],
  declarations: [
    HomePageJumbotronComponent,
    HomePageArgumentsComponent,
    HomePageArgumentComponent,
    HomePageMapComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: []
})
export class HomePageModule {}
