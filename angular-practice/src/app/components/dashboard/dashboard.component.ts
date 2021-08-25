import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  errorMsg: any;

  pages: Array<any> = [
    { pageName: 'javascript-methods', pageURL: 'javascript-methods' },
    {
      pageName: 'javascript-shorthands',
      pageURL: 'javascript-shorthands',
      subPages: [
        {
          pageName: 'smart-and-short-jscode',
          pageURL: 'smart-and-short-jscode',
        },
      ],
    },
    { pageName: 'javascript-one-liners', pageURL: 'javascript-one-liners' },
    { pageName: 'javascript-tips', pageURL: 'javascript-tips' },
    { pageName: 'angular-concepts', pageURL: 'angular-concepts' },
    {
      pageName: 'javascript-code-snippets',
      pageURL: 'javascript-code-snippets',
    },
    {
      pageName: 'javascript-array-functions',
      pageURL: 'javascript-array-functions',
    },
    { pageName: 'search-methods', pageURL: 'search-methods' },
    { pageName: 'angular-observables', pageURL: 'angular-observables' },
    { pageName: 'angular-pipes', pageURL: 'angular-pipes' },
    { pageName: 'angular-http-with-inceptors', pageURL: 'angular-http' },
    { pageName: 'angular-rxjs-deepdive', pageURL: 'angular-rxjs-deepdive' },
    {
      pageName: 'angular-async-await-promise',
      pageURL: 'angular-async-await-promise',
    },
    {
      pageName: 'angular-mergemap-concatmap-switchmap-forkjoin',
      pageURL: 'angular-mergemap-concatmap-switchmap-forkjoin',
    },
    {
      pageName: 'angular-ngtemplate-ngcontent-ngcontainer',
      pageURL: 'angular-ngtemplate-ngcontent-ngcontainer',
    },
    {
      pageName: 'angular-ngif-ngswitch-ngfor',
      pageURL: 'angular-ngif-ngswitch-ngfor',
    },
    {
      pageName: 'angular-routing-gaurd-params',
      pageURL: 'angular-routing-gaurd-params',
    },
    {
      pageName: 'angular-offline-capabilties-service-workers',
      pageURL: 'angular-offline-capabilties-service-workers',
    },
    {
      pageName: 'angular-elements',
      pageURL: 'angular-elements',
    },
  ];

  ngOnInit(): void {}
}
