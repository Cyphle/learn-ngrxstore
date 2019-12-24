import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-page-argument',
  templateUrl: './home-page-argument.component.html',
  styleUrls: ['./home-page-argument.component.scss']
})
export class HomePageArgumentComponent {
  @Input() public argument: Argument;
}
