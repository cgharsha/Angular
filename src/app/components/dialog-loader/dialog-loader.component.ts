import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-loader',
  templateUrl: './dialog-loader.component.html',
  styleUrls: ['./dialog-loader.component.scss']
})
export class DialogLoaderComponent implements OnInit {

  constructor() { }

  @Input() errorMsg:any;

  ngOnInit(): void {
  }

}
