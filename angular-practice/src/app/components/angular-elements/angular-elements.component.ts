import { AlertComponent } from './alert/alert.component';
import { Component, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-angular-elements',
  templateUrl: './angular-elements.component.html',
  styleUrls: ['./angular-elements.component.scss']
})
export class AngularElementsComponent implements OnInit {
  content?:any;

  constructor(private injector: Injector, private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.content = "<p>A paragraph</p>"
    // }, 1000);
    // setTimeout(() => {
    //   this.content = "<app-alert message='Rendered dynamically'></app-alert>"
    // }, 1000);

    const AlertElement = createCustomElement(AlertComponent, {injector: this.injector});
    customElements.define('my-alert', AlertElement);

    setTimeout(() => {
      this.content = this.domSanitizer.bypassSecurityTrustHtml("<my-alert message='Rendered dynamically'></my-alert>")
    }, 1000);
  }


}
