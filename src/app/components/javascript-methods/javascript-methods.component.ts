import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-methods',
  templateUrl: './javascript-methods.component.html',
  styleUrls: ['./javascript-methods.component.scss']
})
export class JavascriptMethodsComponent implements OnInit {

  constructor() { }

  numberArray:Array<number> = [1, 2, 3];
  stringArray:Array<string> = ['one-two', 'three-four'];
  splitString:string = 'one-two'
  refObj = {a:'string', b:2}

  ngOnInit(): void {

    // Slice Array
    let sliceResult = this.numberArray.slice(0, 1);
    console.log("JS array slice " + sliceResult);

    //Split String into Array
    // let splitArray = this.stringArray.split('-'); // Not applicable on Array
    let splitString = this.splitString.split('-');
    console.log("JS array split " + splitString);

    // Join Array returns string
    let joinArray = this.stringArray.join('-');
    console.log("JS array join " + joinArray);

    // Arrow Function - replaces keyword function with =>
    const sum = (a:number, b:number) => {
      return a + b;
    }

    // Above code identical to
    function sumnum(a:number, b:number) {
      return a + b;
    }

    console.log(sum);

    // Object literal

    console.log(this.refObj.a);
    console.log(this.refObj['a']);
    // console.log(this.refObj[a]);

    // JS for in
    for (let key in this.refObj){
      console.log("JS for in " + key);
    }
    
    // js Object keys & values
    console.log("JS Object.keys " + Object.keys(this.refObj));
    console.log("JS Object.values " + Object.values(this.refObj));

    // js destructuring
    const { a } = { a:1 }
    console.log("JS Destructuring " + a); 
    console.log(a);

    // Destructuring
    const b = 1;
    const obj = { b };
    console.log("JS Destructuring " + obj);  
    console.log(obj);  

    // JS Array method

    // js map
    const arrayMap = this.numberArray.map(n => n+1 );
    console.log("JS .map " + arrayMap);

    // foreach
    this.numberArray.forEach(n => console.log("JS .foreach " + n));

    // js filter
    const arrayFilter = this.numberArray.filter(n => n > 1);
    console.log("JS .filter " + arrayFilter);

    // js reduce
    // const arrayReduce = this.numberArray.reduce((n, val) => a + val);
    const arrayReduce = this.numberArray.reduce((n, val) => {
      console.log("JS inside reduce " + "n is " + n + " val is " + val)
      return a + val;
    });
    console.log("JS .reduce " + arrayReduce);

    // js sort

    console.log("JS .sort " + [3, 2, 1].sort());

    // Promise .then
    // PROMISE.then(result => console.log(result))

    // Several .then in a bride
    // PROMISE.then(...).then(...)


    // async await
    // const res = await fetch(URL)

    // async await functions
    // const getURL = async URL => await fetch(URL)

    // Array.map()

    const cars = ["Porsche", "Audi", "BMW", "Volkswagen"];

    const coolCars = cars.map(car => `${car} is a pretty cool car brand!`);
    console.log(coolCars)
    // Result: ["Porsche is a pretty cool car brand!", "Audi is a pretty cool car brand!", "BMW is a pretty cool car brand!", "Volkswagen is a pretty cool car brand!"];

    const carsWithPrice = [
      {brand: "Porsche", price: 100000},
      {brand: "Audi", price: 80000}
    ];

    const carsWithPriceAndTax = carsWithPrice.map((carObject) => {
      return {
        // Return the original car object
        ...carObject,
        // but also add a new value containing the price with tax
        priceWithTax: carObject.price * 1.2
      }
    });

    // Result:[{brand: "Porsche", price: 100000, priceWithTax: 120000},{brand: "Audi", price: 80000, priceWithTax: 96000}];
    console.log(carsWithPriceAndTax);

    // Array.filter()

    const carsAndPrice = [
      {brand: "Porsche", price: 100000},
      {brand: "Audi", price: 80000},
      {brand: "Toyota", price: 30000}
    ];

    const expensiveCars = carsAndPrice.filter(car => car.price >= 40000);
    const cheapCars = carsAndPrice.filter(car => car.price < 40000);

    console.log(expensiveCars);
    console.log(cheapCars);

    // Result - Expensive Cars
    // [
    //   {brand: "Porsche", price: 100000},
    //   {brand: "Audi", price: 80000}
    // ];
    // Result - Cheap Cars
    // [
    //   {brand: "Toyota", price: 30000}
    // ];

    // Array.reduce()

    const numbers = [13, 65, 29, 81, 47];

    const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    console.log(total);
    // Result - Total:
    // 235

    const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
      ( accumulator, currentValue ) => accumulator.concat(currentValue),
      []
    )
    console.log(flattened);

    // Result - Flattened:
    // [0, 1, 2, 3, 4, 5]

    // Array.forEach()

    const carsforEach:Array<any> = [
      {brand: "Porsche", price: 100000},
      {brand: "Audi", price: 80000},
      {brand: "Toyota", price: 30000}
    ];

    carsforEach.forEach(car => {
      console.log(`The ${car.brand} will cost you ${car.price} before taxes`);
    });

    // Result:
    // "The Porsche will cost you 100000 before taxes"
    // "The Audi will cost you 80000 before taxes"
    // "The Toyota will cost you 30000 before taxes"

    // Array.find()

  const carsFind = [
    {brand: "Porsche", price: 100000},
    {brand: "Audi", price: 80000},
    {brand: "Toyota", price: 30000}
  ];

  const expensiveCar = carsFind.find(car => car.price >= 40000);
  console.log(expensiveCars);
  // Result - Expensive Car:
  // {brand: "Porsche", price: 100000}

  // Array.every()

  const carsEvery = [
    {brand: "Porsche", price: 100000, builtIn: 2018},
    {brand: "Audi", price: 80000, builtIn: 2019},
    {brand: "Toyota", price: 30000, builtIn: 2019}
  ];

  const carsYoungerThanFiveYears = carsEvery.every(car => car.builtIn >= 2016);
  console.log(carsYoungerThanFiveYears);
  // Result - Younger than 5 Years:
  // true

  // Array.some()

  const carsSome = [
    {brand: "Porsche", price: 100000, builtIn: 2018},
    {brand: "Audi", price: 80000, builtIn: 2019},
    {brand: "Toyota", price: 30000, builtIn: 2019}
  ];
  const carsOlderThanFiveYears = carsSome.some(car => car.builtIn < 2016);
  console.log(carsSome);
  // Result - Older than 5 Years:
  // false

  }

}
