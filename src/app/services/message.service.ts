import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private subject = new Subject<any>();

  constructor() { }

  reset(){
    this.subject.next({text: 'Reset'});
  }

  getMessage(): Observable<any>{
    return this.subject.asObservable();
  }
}
