import { map, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-async-await-promise',
  templateUrl: './angular-async-await-promise.component.html',
  styleUrls: ['./angular-async-await-promise.component.scss'],
})
export class AngularAsyncAwaitPromiseComponent implements OnInit {
  private apiURL = 'https://api.github.com/';
  public message: string = 'Uninitialized';
  public response: any;
  public messageAlt: string = 'Uninitialized';
  public responseAlt: any;
  public relay = 'Uninitialized';
  public responseAltData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  async fetchData() {
    this.message = 'Fetching..';
    this.response = '';
    this.response = await this.http
      .get(this.apiURL)
      .pipe(delay(3500))
      .pipe(
        map((responseData) => {
          return responseData;
        })
      )
      .toPromise();
    this.message = 'Fetched';
  }

  fetchDataAlt() {
    this.messageAlt = 'Fetching..';
    this.responseAlt = '';
    this.http
      .get(this.apiURL)
      .pipe(
        delay(2000),
        map((responseData) => {
          return responseData;
        })
      )
      .subscribe((data) => {
        this.responseAlt = data;
      });
    this.messageAlt = 'Fetched';
  }

  async doSomething() {
    this.relay = 'Waiting...';
    this.responseAltData = '';
    this.responseAltData = await this.longRunningMethod();
    this.relay = 'called!';
  }

  async longRunningMethod() {
    let responseAltData = await this.http
      .get<any>(this.apiURL)
      .pipe(delay(1000), map( responseData => {
        console.log(responseData);
        return responseData;
      }))
      .toPromise();
    return responseAltData;
  }
}
