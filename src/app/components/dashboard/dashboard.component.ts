import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  pages:Array<any> = [
    {pageName:'36-javascript-methods', pageURL:'javascript-methods'},
    {pageName:'javascript-shorthands', pageURL:'javascript-shorthands'},
    {pageName:'javascript-one-liners', pageURL:'javascript-one-liners'},
    {pageName:'javascript-tips', pageURL:'javascript-tips'},
    {pageName:'angular-concepts', pageURL:'angular-concepts'},
  ]

  ngOnInit(): void {
  }

}
