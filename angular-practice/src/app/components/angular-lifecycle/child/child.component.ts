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
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent
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
  @Input() message:string = "";

    constructor() {
    console.log("Child Component Life Cycle:Constructor");
    }
  
    ngOnChanges() {
      console.log("Child Component Life Cycle:OnChanges");
    }
  
  
    ngOnInit() {
      console.log("Child Component Life Cycle:OnInit");
    }
  
    ngDoCheck() {
      console.log("Child Component Life Cycle:DoCheck");
    }
  
    ngAfterContentInit() {
      console.log("Child Component Life Cycle:AfterContentInit");
    }
  
    ngAfterContentChecked() {
      console.log("Child Component Life Cycle:AfterContentChecked");
    }
  
    ngAfterViewInit() {
      console.log("Child Component Life Cycle:AfterViewInit");
    }
  
    ngAfterViewChecked() {
      console.log("Child Component Life Cycle:AfterViewChecked");
    }
  
    ngOnDestroy() {
      console.log("Child Component Life Cycle:OnDestroy");
    }
}
