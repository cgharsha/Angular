import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-one-liners',
  templateUrl: './javascript-one-liners.component.html',
  styleUrls: ['./javascript-one-liners.component.scss']
})
export class JavascriptOneLinersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Get a random boolean (true/false)

    const randomBoolean = () => Math.random() >= 0.5;
    console.log(randomBoolean());
    // Result: a 50/50 change on returning true of false

    // Check if the provided day is a weekday

    const isWeekday = (date:Date) => date.getDay() % 6 !== 0;
    console.log(isWeekday(new Date(2021, 0, 11)));
    // Result: true (Monday)
    console.log(isWeekday(new Date(2021, 0, 10)));
    // Result: false (Sunday)

    // Reverse a string

    const reverse = (str:any) => str.split('').reverse().join('');
    reverse('hello world');
    console.log(reverse('hello world'));
    // Result: 'dlrow olleh'

    // Check if the current tab is in view / focus

    const isBrowserTabInView = () => document.hidden;
    isBrowserTabInView();
    console.log(isBrowserTabInView());
    // Result: returns true or false depending on if tab is in view / focus

    // Check if a number is even or odd

    const isEven = (num:number) => num % 2 === 0;
    console.log(isEven(2));
    // Result: true
    console.log(isEven(3));
    // Result: false

    // Get the time from a date

    const timeFromDate = (date:Date) => date.toTimeString().slice(0, 8);
    console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0))); 
    // Result: "17:30:00"
    console.log(timeFromDate(new Date()));
    // Result: will log the current time

    // Truncate a number to a fixed decimal point

    const toFixed = (n:number, fixed:number) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
    // Examples
    // toFixed(25.198726354, 1);       // 25.1
    // toFixed(25.198726354, 2);       // 25.19
    // toFixed(25.198726354, 3);       // 25.198
    // toFixed(25.198726354, 4);       // 25.1987
    // toFixed(25.198726354, 5);       // 25.19872
    // toFixed(25.198726354, 6);       // 25.198726
    console.log(toFixed(25.198726354, 2));

    // Check if an element is currently in focus

    const elementIsInFocus = (el:any) => (el === document.activeElement);
    // elementIsInFocus(anyElement)
    // Result: will return true if in focus, false if not in focus

    // Check if the current user has touch events supported

    const touchSupported = () => {
      // ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);
    }
    console.log(touchSupported());
    // Result: will return true if touch events are supported, false if not

    // Check if the current user is on an Apple device

    const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
    console.log(isAppleDevice);
    // Result: will return true if user is on an Apple device

    // Scroll to top of the page

    const goToTop = () => window.scrollTo(0, 0);
    goToTop();
    // Result: will scroll the browser to the top of the page

    // Get average value of arguments

    const average = (...args:Array<any>) => args.reduce((a, b) => a + b) / args.length;
    average(1, 2, 3, 4);
    console.log(average(1, 2, 3, 4))
    // Result: 2.5

    // Convert Fahrenheit / Celsius

    const celsiusToFahrenheit = (celsius:number) => celsius * 9/5 + 32;
    const fahrenheitToCelsius = (fahrenheit:number) => (fahrenheit - 32) * 5/9;
    // Examples
    celsiusToFahrenheit(15);    // 59
    celsiusToFahrenheit(0);     // 32
    celsiusToFahrenheit(-20);   // -4
    fahrenheitToCelsius(59);    // 15
    fahrenheitToCelsius(32);    // 0
    console.log(`Celsius of Fahrenheit 15 is`, celsiusToFahrenheit(15), `Fahrenheit to Celsius 32 is`, fahrenheitToCelsius(32));

  }

}
