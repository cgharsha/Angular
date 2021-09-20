import {
  Component,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  Input,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-angular-lifecycle',
  templateUrl: './angular-lifecycle.component.html',
  styleUrls: ['./angular-lifecycle.component.scss'],
})
export class AngularLifecycleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  displayChild: boolean = false;

  toggle() {
    this.displayChild = !this.displayChild;
  }

  constructor() {
    console.log('Main Component Life Cycle: Constructor');
  }

  ngOnChanges() {
    console.log('Main Component Life Cycle: OnChanges');
  }

  ngOnInit() {
    console.log('Main Component Life Cycle: OnInit');
  }

  ngDoCheck() {
    console.log('Main Component Life Cycle: DoCheck');
  }

  ngAfterContentInit() {
    console.log('Main Component Life Cycle: AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Main Component Life Cycle:AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Main Component Life Cycle:AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Main Component Life Cycle:AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Main Component Life Cycle:OnDestroy');
  }
}
