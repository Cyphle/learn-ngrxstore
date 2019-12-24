import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ExperienceComponent } from './components/experience/experience.component';

@NgModule({
  exports: [
    ExperiencesComponent
  ],
  declarations: [
    ExperiencesComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: []
})
export class ExperiencesModule {
}
