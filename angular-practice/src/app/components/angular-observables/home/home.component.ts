import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription = new Subscription();
  // private firstObsSubscription?: Subscription;

  constructor() {}

  ngOnInit(): void {
    // this.firstObsSubscription = interval(1000).subscribe( count => {
    //   console.log(count);
    // });

    // const customIntervalObservable = Observable.create((observer:any) => {
    //   let count = 0
    //   setInterval( () => {
    //     observer.next(count);
    //     count++;
    //   }, 1000);
    // });

    const customIntervalObservable = new Observable((observer: any) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });

    // customIntervalObservable.pipe(map((data:any) => {
    //   // console.log(data);
    //   return 'Round ' + (data + 1);
    // }));

    // this.firstObsSubscription = customIntervalObservable.subscribe(
    //   (data: any) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     // console.log(error);
    //     console.log(error.message);
    //   },
    //   () => {
    //     console.log('Completed!');
    //   }
    // );

    this.firstObsSubscription = customIntervalObservable
      .pipe(
        filter( (data:any) => {
          return data > 0
        }),
        map((data: any) => {
          // console.log(data);
          return 'Round ' + (data + 1);
        })
      )
      .subscribe(
        (data: any) => {
          console.log(data);
        },
        (error) => {
          // console.log(error);
          console.log(error.message);
        },
        () => {
          console.log('Completed!');
        }
      );
  }

  ngOnDestroy(): void {
    // this.firstObsSubscription?.unsubscribe();
    this.firstObsSubscription.unsubscribe();
  }
}
