import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/component/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/component/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: []
})
export class SharedComponentsModule {
}
