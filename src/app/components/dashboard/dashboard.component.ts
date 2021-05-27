import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  errorMsg:any;

  pages:Array<any> = [
    {pageName:'javascript-methods', pageURL:'javascript-methods'},
    {pageName:'javascript-shorthands', pageURL:'javascript-shorthands', subPages:[
      {pageName:'smart-and-short-jscode', pageURL:'smart-and-short-jscode'}
    ]},
    {pageName:'javascript-one-liners', pageURL:'javascript-one-liners'},
    {pageName:'javascript-tips', pageURL:'javascript-tips'},
    {pageName:'angular-concepts', pageURL:'angular-concepts'},
    {pageName:'javascript-code-snippets', pageURL:'javascript-code-snippets'},
    {pageName:'javascript-array-functions', pageURL:'javascript-array-functions'}
  ]

  ngOnInit(): void {
  }

}
