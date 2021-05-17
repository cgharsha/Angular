import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface AngularConceptsDialogData{
  msgOne:any, 
  msgTwo:any
}

@Component({
  selector: 'app-angular-concepts-dialog',
  templateUrl: './angular-concepts-dialog.component.html',
  styleUrls: ['./angular-concepts-dialog.component.scss']
})
export class AngularConceptsDialogComponent implements OnInit {
  messageOne:any;
  messageTwo:any;

  constructor(
    private dialogRef: MatDialogRef<AngularConceptsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: AngularConceptsDialogData
  ) { 
    dialogRef.disableClose = true;
    this.messageOne = data.msgOne;
    this.messageTwo = data.msgTwo;
  }

  ngOnInit(): void {
    console.log(this.messageOne, this.messageTwo)
  }

  onClose(){
    this.dialogRef.close({data:'Send Anything', dataChange:true});
  }

}
