import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-split-two-way-binding',
  templateUrl: './split-two-way-binding.component.html',
  styleUrls: ['./split-two-way-binding.component.scss']
})
export class SplitTwoWayBindingComponent implements OnInit {

  @Input() message: any;
  @Output() messageChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessageToParent(){
    this.message = "Text changed from child to parent component by split 2 way binding"
    this.messageChange.emit(this.message);
  }

}
