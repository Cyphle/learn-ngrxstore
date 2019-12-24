import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app.ngrx';
import { selectExperiences } from '../../store';

@Component({
  selector: 'app-experiences-entries',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  public experiences$: Observable<Experience[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.experiences$ = this.store.select(selectExperiences);
  }
}
