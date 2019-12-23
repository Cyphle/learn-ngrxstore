import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageJumbotronComponent } from './home-page-jumbotron/home-page-jumbotron.component';

@NgModule({
  exports: [
    HomePageJumbotronComponent,
  ],
  declarations: [
    HomePageJumbotronComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: []
})
export class HomePageModule {}
