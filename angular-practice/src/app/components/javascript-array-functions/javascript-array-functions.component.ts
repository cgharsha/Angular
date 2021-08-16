import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript-array-functions',
  templateUrl: './javascript-array-functions.component.html',
  styleUrls: ['./javascript-array-functions.component.scss']
})
export class JavascriptArrayFunctionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var arrayObject = ["JavaScript","Angular","React", "Python", "nodejs"];
    console.log(arrayObject);

    // filter()

    const ages = [20, 22, 26, 30, 21, 35, 33];
		console.log(ages.filter(age => age < 25));

    // Push() and Pop()

    // push()

    var countries = ["INDIA", "USA", "DUBAI","UK", "GERMANY"];
    var totalCountries = countries.push("FRANCE");
    console.log(totalCountries, countries)
    // Now the updated array looks like:
    // ["INDIA", "USA", "DUBAI","UK", GERMANY", "FRANCE"];

    // pop()

    var countries = ["INDIA", "USA", "DUBAI","UK", "GERMANY"];
    countries.pop();
    console.log(countries);
    // output: 
    // "GERMANY"
    // Again when you apply pop() then the output will be 
    // "UK"
    // and the updated array looks like 
    // INDIA, USA, DUBAI

    // map()

    var numbers = [10, 20, 30, 40, 50];
    var updatedNumbers = numbers.map(number =>  2 * number);
    console.log(updatedNumbers);
    // output:
    // [20, 40, 60, 80, 100]

    // forEach()

    const items = [10,20, 30, 40, 50];
    items.forEach(function (item) {
        console.log(item)
    });
    // output:
    // 10
    // 20
    // 30
    // 40
    // 50

    // indexOf()

    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var a = fruits.indexOf("Apple");
    console.log(a)
    // output:
    // 2

    // find()

    var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    var maxNumber = numbers.find(item => item >= 5);
    console.log(maxNumber)
    // output:
    // 5
    // 6
    // 7
    // 8

    // join()

    var numbers = [1,2,3,4,5,6,7,8];
    console.log(numbers.join());
    // output: 1,2,3,4,5,6,7,8
    // const numbers - [1,2,3,4,5,6,7,8];
    console.log(numbers.join("=> "));
    // output: 1 => 2 => 3 => 4 => 5 => 6 => 7 => 8

    // Unique in arrays
    var duplicates = [1, 3, 4, 2, 1, 2, 3, 8];
    // var uniques = duplicates.unique(); // result = [1,3,4,2,8]
    // console.log(uniques);
    const mapUniqueArray:Array<any> = [];
    for(let uniquearray of duplicates){
      console.log(mapUniqueArray.includes(uniquearray));
      console.log(mapUniqueArray.indexOf(uniquearray));
      // if(mapUniqueArray.indexOf(uniquearray) === -1){
      //   mapUniqueArray.push(uniquearray);
      // }
      if(!mapUniqueArray.includes(uniquearray)){
        mapUniqueArray.push(uniquearray);
      }
    }
    console.log(mapUniqueArray);

    console.log([...new Set(duplicates)]);

    var mapArrayindexOf = duplicates.filter((item, index) => 
      duplicates.indexOf(item) === index);
    console.log(mapArrayindexOf);

    var mapArrayRedue = duplicates.reduce((unique:Array<any>, item ) => 
      unique.includes(item) ? unique : [...unique, item],[]);
    console.log(mapArrayRedue);

    const uniqueSet = new Set(duplicates);
    const backToArray = [...uniqueSet];
    console.log(uniqueSet);
    console.log(backToArray);

    const arrayFrom = Array.from(new Set(duplicates));
    console.log(arrayFrom);

    // Get Unique Array and Retrive Duplicate Using Filter and indexOf
    
    console.log(duplicates);
    const arrayfilterDuplicate = duplicates.filter((item, index) => {
      console.log(item, index, duplicates.indexOf(item), duplicates.indexOf(item) === index);

      return duplicates.indexOf(item) === index;
    });
    console.log(arrayfilterDuplicate);

    const arrayRetrieveDuplicate = duplicates.filter((item, index) => {
      return duplicates.indexOf(item) !== index;
    });
    console.log(arrayRetrieveDuplicate);

    
    // Get Unique Array and Retrive Duplicate Using Reduce

    console.log(duplicates);
    const arrayreduceDuplicate = duplicates.reduce((unique:Array<any>, item) => {
      console.log(unique, item, unique.includes(item), unique.includes(item) ? unique : [...unique, item]);

      return unique.includes(item) ? unique : [...unique, item];
    }, []);
    console.log(arrayreduceDuplicate);
    

    //  Some and Find

    var operatives = [
      { id: 12, name: 'Baze Malbus', pilot: false },
      { id: 44, name: 'Bodhi Rook', pilot: true },
      { id: 59, name: 'Chirrut Îmwe', pilot: false },
      { id: 122, name: 'Jyn Erso', pilot: false }
    ];

    var listHasPilots = false;
    operatives.forEach(function (operative) {
      if (operative.pilot) {
        listHasPilots = true;
        console.log(listHasPilots);
      }
    });

    // using some func

    var listHasPilots = operatives.some(function (operative) {
      return operative.pilot;
    });
    console.log(listHasPilots);

    // more concise with arrow functions

    var listHasPilots = operatives.some(operative => operative.pilot);
    console.log(listHasPilots);

    // using find func

    var firstPilot = operatives.find(function (operative) {
      return operative.pilot;
    });
    console.log(firstPilot);

    // more concise with arrow functions
    var firstPilot = operatives.find(operative => operative.pilot)
    console.log(firstPilot);

  }

}
