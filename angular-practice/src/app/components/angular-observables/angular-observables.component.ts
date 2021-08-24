import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserService } from './services/user.service';

@Component({
  selector: 'app-angular-observables',
  templateUrl: './angular-observables.component.html',
  styleUrls: ['./angular-observables.component.scss']
})
export class AngularObservablesComponent implements OnInit, OnDestroy {

  constructor(private userService: UserService) { }

  userActivated = false;
  private activatedSub?: Subscription;

  ngOnInit(): void {
    this.activatedSub = this.userService.activatedEmitter.subscribe(data => {
      this.userActivated = data;
    })
  }

  ngOnDestroy(): void {
    this.activatedSub?.unsubscribe();
  }

}
