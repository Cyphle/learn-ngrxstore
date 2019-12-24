import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppState } from '../../../../app.ngrx';
import { Store } from '@ngrx/store';
import { UpdateExperienceAction } from '../../store/experiences.actions';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  @Input() public experience: Experience;
  public updatedDescription: FormControl;

  constructor(private store: Store<AppState>) {
    this.updatedDescription = new FormControl(null);
  }

  onValidate(): void {
    this.store.dispatch(new UpdateExperienceAction({ ...this.experience, description: this.updatedDescription.value }));
  }
}
