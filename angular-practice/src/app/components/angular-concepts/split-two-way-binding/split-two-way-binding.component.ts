import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-split-two-way-binding',
  templateUrl: './split-two-way-binding.component.html',
  styleUrls: ['./split-two-way-binding.component.scss']
})
export class SplitTwoWayBindingComponent implements OnInit {
  retrieveParentMessageToChild?:string;

  @Input() value?:any;
  @Output() childMessage = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessageToParent(){
    this.value = "Text changed from child component by split 2 way binding"
    this.childMessage.emit(this.value);
  }

}
