import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AngularConceptsChildComponent } from './angular-concepts-child/angular-concepts-child.component';
import { AngularConceptsDialogComponent } from './angular-concepts-dialog/angular-concepts-dialog.component';

@Component({
  selector: 'app-angular-concepts',
  templateUrl: './angular-concepts.component.html',
  styleUrls: ['./angular-concepts.component.scss'],
})
export class AngularConceptsComponent
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  constructor(
    private messageService: MessageService,
    private dialogBox: MatDialog,
    private cdRef: ChangeDetectorRef
  ) {
    this.messageService.getMessage().subscribe((message) => {
      console.log('Message Recieved from Header Component');
      // this.openDialog();
    });
  }

  parentMessage: string =
    'This is a message from Parent Component to Child Component';
  childMessage: string = '';
  messageFromChild: string = '';
  twoWayMessage?: any =
    'This is a message from Parent Component to Child Component using Split 2 way data binding';

  @ViewChild(AngularConceptsChildComponent, { static: false }) child: any;
  @ViewChild('elementRefExample') viewDiv: any;

  ngOnInit(): void {
    console.log(this.child);
  }

  openDialog() {
    const dialogRef = this.dialogBox.open(AngularConceptsDialogComponent, {
      width: '800px',
      height: 'auto',
      panelClass: 'angular-concept-dialog',
      data: { msgOne: 'Message One', msgTwo: 'Message Two' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result.data, result.dataChange);
      // console.log('The dialog was closed');
    });
  }

  recieveMessageFromChild(event: any) {
    this.messageFromChild = event;
  }

  ngAfterContentInit(): void {
    // this.childMessage = this.child.messageFromChild;
  }

  ngAfterContentChecked(): void {
    // this.childMessage = this.child.messageFromChild;
  }

  ngAfterViewInit() {
    this.childMessage = this.child.messageFromChild;
    this.cdRef.detectChanges();
    console.log(this.viewDiv);
    this.viewDiv.nativeElement.innerHTML = 'View Child Message thru ElementRef';
    console.log(this.child);
    setTimeout(
      () =>
        (this.child.retrieveParentMessageToChild =
          'Text changes after viewInit with timeout'),
      3000
    );
    // this.child.retrieveParentMessageToChild = "Text"
    // this.child.nativeElement.innerHTML = "Text";
  }

  ngAfterViewChecked() {
    // this.child.retrieveParentMessageToChild = "Text"
  }
}
