import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectorRef, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-angular-concepts-child',
  templateUrl: './angular-concepts-child.component.html',
  styleUrls: ['./angular-concepts-child.component.scss']
})
export class AngularConceptsChildComponent implements OnInit, AfterViewInit {

  constructor(private cdRef: ChangeDetectorRef ) { }

  @Input() retrieveParentMessageToChild:any;
  @Output() messageEvent = new EventEmitter<string>();
  messageFromChild:string = 'This is a Message from Child to Parent via ViewChild with After ViewInit';
  messageThruEventEmitter = 'This is Message thru Event Emitter';

  ngOnInit(): void {
  }

  ngAfterViewInit():void {
    // this.cdRef.detectChanges();
  }

  sendMessageToParent(){
    this.messageEvent.emit(this.messageThruEventEmitter);
  }

}
