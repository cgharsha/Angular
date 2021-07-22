import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-difference-change-ngmodelchange',
  templateUrl: './difference-change-ngmodelchange.component.html',
  styleUrls: ['./difference-change-ngmodelchange.component.scss']
})
export class DifferenceChangeNgmodelchangeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // There are a few things to note here:

  // Using (change) will only fire when the user has blurred the input
  // Using (ngModelChange) essentially is listening to the input event, and setting the model if a user types, pastes or changes the input’s value
  // And also:

  // With (change) we need to use the e.target.value as we’re given a plain DOM Event. From there, we can set the model value internally in the component!
  // With (ngModelChange) we are given the value as just e, which you could rename to value or something you prefer.
  // What about when the event fires and the model value is set?

  // The (change)=”changeFn($)” will fire after the value bound to [(ngModel)] has changed
  // The (ngModelChange)=”modelChangeFn($event)” will fire before the value bound to [(ngModel)] has changed.

  foo = 'Hello';
  bar = 'World';

  changeFn(e:any) {
    this.foo = e.target.value;
  }
  modelChangeFn(value:any) {
    this.bar = value;
  }

}
