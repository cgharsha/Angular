import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-directives',
  templateUrl: './angular-directives.component.html',
  styleUrls: ['./angular-directives.component.scss']
})
export class AngularDirectivesComponent implements OnInit {
  // numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];

  value = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
