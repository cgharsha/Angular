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

  }

}
